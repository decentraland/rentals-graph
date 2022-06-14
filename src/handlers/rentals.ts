import { log } from '@graphprotocol/graph-ts'
import { buildCountFromRental } from '../modules/count'
import { Rental } from '../entities/schema'
import { OperatorUpdated, RentalStarted, AssetClaimed } from '../entities/Rentals/Rentals'

export function handleRentalStart(event: RentalStarted): void {
  // Find the best ID for the rentals
  let rental = new Rental('pepe')
  rental.contractAddress = event.params._contractAddress.toHexString()
  rental.tokenId = event.params._tokenId
  rental.lessor = event.params._lessor.toHexString()
  rental.tenant = event.params._tenant.toHexString()
  rental.operator = event.params._operator.toHexString()
  rental.rentalDays = event.params._rentalDays
  rental.pricePerDay = event.params._pricePerDay
  rental.sender = event.params._sender.toHexString()
  rental.ownerHasClaimedAsset = false
  rental.save()

  let metric = buildCountFromRental()
  metric.save()
}

export function handleOperatorUpdated(event: OperatorUpdated): void {
  // Find the best ID for the rentals
  let rental = Rental.load('pepe')

  if (rental == null) {
    log.error('An operator was updated for a rental that doesn\'t exist "{}"', [
      event.params._contractAddress.toHexString(),
      event.params._tokenId.toHexString()
    ])
    return
  }

  rental.operator = event.params._to.toHexString()
  rental.save()
}

export function handleClaimedAsset(event: AssetClaimed): void {
  // Find the best ID for the rentals
  let rental = Rental.load('pepe')

  if (rental == null) {
    log.error('An asset was claimed for a rental that doesn\'t exist "{}"', [
      event.params._contractAddress.toHexString(),
      event.params._tokenId.toHexString()
    ])
    return
  }

  rental.ownerHasClaimedAsset = true
  rental.save()
}
