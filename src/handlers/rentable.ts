import { log } from '@graphprotocol/graph-ts'
import { Rental } from '../entities/schema'
import { UpdateOperator } from '../entities/templates/Rentable/Rentable'
import { getRentalsCount } from '../modules/count'
import { buildRentalId } from '../modules/rentals'

export function handleUpdateOperator(event: UpdateOperator): void {
  let contractAddress = event.address.toHexString()
  let tokenId = event.params._tokenId
  let rentalIndex = getRentalsCount(contractAddress, tokenId)
  let rentalId = buildRentalId(contractAddress, tokenId, rentalIndex.value)
  let rental = Rental.load(rentalId)

  if (rental == null) {
    log.error('An operator was updated for a rental that doesn\'t exist "{}"', [contractAddress, tokenId.toString()])
    return
  }

  if (!rental.isActive) {
    log.info("Rental is not active, skipping updating the operator", [])
  }

  rental.operator = event.params._operator.toHexString()
  rental.updatedAt = event.block.timestamp
  rental.save()
}
