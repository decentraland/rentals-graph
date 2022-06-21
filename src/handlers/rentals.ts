/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prefer-const */
import { log } from '@graphprotocol/graph-ts'
import { BigInt } from '@graphprotocol/graph-ts'
import { buildCountForAllRentals, buildCountForRentals } from '../modules/count'
import { Rental } from '../entities/schema'
import { OperatorUpdated, RentalStarted, AssetClaimed } from '../entities/Rentals/Rentals'

function buildRentalId(contractAddress: string, tokenId: BigInt, index: BigInt): string {
  return contractAddress + ':' + tokenId.toString() + ':' + index.toString()
}

export function handleRentalStart(event: RentalStarted): void {
  let contractAddress = event.params._contractAddress.toHexString()
  let tokenId = event.params._tokenId

  let rentalIndex = buildCountForRentals(contractAddress, tokenId)
  let newRentalId = buildRentalId(contractAddress, tokenId, rentalIndex.value)

  let rental = new Rental(newRentalId)
  rental.contractAddress = contractAddress
  rental.tokenId = tokenId
  rental.lessor = event.params._lessor.toHexString()
  rental.tenant = event.params._tenant.toHexString()
  rental.operator = event.params._operator.toHexString()
  rental.rentalDays = event.params._rentalDays
  rental.pricePerDay = event.params._pricePerDay
  rental.sender = event.params._sender.toHexString()
  rental.ownerHasClaimedAsset = false
  rental.startedAt = event.block.timestamp
  rental.save()
  rentalIndex.save()

  let metric = buildCountForAllRentals()
  metric.save()
}

export function handleOperatorUpdated(event: OperatorUpdated): void {
  let contractAddress = event.params._contractAddress.toHexString()
  let tokenId = event.params._tokenId
  let rentalIndex = buildCountForRentals(contractAddress, tokenId)
  // Get the current one
  rentalIndex.value.minus(BigInt.fromI32(1))
  let rentalId = buildRentalId(contractAddress, tokenId, rentalIndex.value)
  let rental = Rental.load(rentalId)

  if (rental == null) {
    log.error('An operator was updated for a rental that doesn\'t exist "{}"', [contractAddress, tokenId.toString()])
    return
  }

  rental.operator = event.params._to.toHexString()
  rental.save()
}

export function handleClaimedAsset(event: AssetClaimed): void {
  let contractAddress = event.params._contractAddress.toHexString()
  let tokenId = event.params._tokenId
  let rentalIndex = buildCountForRentals(contractAddress, tokenId)
  // Get the current one
  rentalIndex.value.minus(BigInt.fromI32(1))
  let rentalId = buildRentalId(contractAddress, tokenId, rentalIndex.value)
  let rental = Rental.load(rentalId)

  if (rental == null) {
    log.error('An asset was claimed for a rental that doesn\'t exist "{}"', [contractAddress, tokenId.toString()])
    return
  }

  rental.ownerHasClaimedAsset = true
  rental.save()
}
