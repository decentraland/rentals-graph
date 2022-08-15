/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prefer-const */
import { log } from '@graphprotocol/graph-ts'
import { getAllRentalsNextCount, getRentalsCount, getRentalsNextCount } from '../modules/count'
import { buildRentalId, DAY_TIMESTAMP } from '../modules/rentals'
import { Rental } from '../entities/schema'
import { OperatorUpdated, AssetRented, AssetClaimed } from '../entities/Rentals/Rentals'

export function handleAssetRented(event: AssetRented): void {
  let contractAddress = event.params._contractAddress.toHexString()
  let tokenId = event.params._tokenId

  let currentRentalIndex = getRentalsCount(contractAddress, tokenId)
  let newRentalIndex = getRentalsNextCount(contractAddress, tokenId)
  let currentRentalId = buildRentalId(contractAddress, tokenId, currentRentalIndex.value)
  let newRentalId = buildRentalId(contractAddress, tokenId, newRentalIndex.value)

  let rentalContractAddress = event.transaction.to

  if (!rentalContractAddress) {
    log.error('An asset was rented without a rental contract address', [])
    return
  }

  let rental = new Rental(newRentalId)
  rental.contractAddress = contractAddress
  rental.tokenId = tokenId
  rental.lessor = event.params._lessor.toHexString()
  rental.tenant = event.params._tenant.toHexString()
  rental.operator = event.params._operator.toHexString()
  rental.rentalDays = event.params._rentalDays
  rental.pricePerDay = event.params._pricePerDay
  rental.sender = event.params._sender.toHexString()
  rental.startedAt = event.block.timestamp
  rental.updatedAt = event.block.timestamp
  rental.endsAt = event.block.timestamp.plus(event.params._rentalDays.times(DAY_TIMESTAMP))
  rental.signature = event.params._signature.toHexString()
  rental.isExtension = event.params._isExtension
  rental.rentalContractAddress = rentalContractAddress.toHexString()
  rental.ownerHasClaimedAsset = false
  rental.isActive = true

  let currentRental = Rental.load(currentRentalId)
  if (currentRental) {
    currentRental.isActive = false
    currentRental.save()
  }

  rental.save()
  newRentalIndex.save()

  let metric = getAllRentalsNextCount()
  metric.save()
}

export function handleOperatorUpdated(event: OperatorUpdated): void {
  let contractAddress = event.params._contractAddress.toHexString()
  let tokenId = event.params._tokenId
  let rentalIndex = getRentalsCount(contractAddress, tokenId)
  let rentalId = buildRentalId(contractAddress, tokenId, rentalIndex.value)
  let rental = Rental.load(rentalId)

  if (rental == null) {
    log.error('An operator was updated for a rental that doesn\'t exist "{}"', [contractAddress, tokenId.toString()])
    return
  }

  rental.operator = event.params._to.toHexString()
  rental.updatedAt = event.block.timestamp
  rental.save()
}

export function handleAssetClaimed(event: AssetClaimed): void {
  let contractAddress = event.params._contractAddress.toHexString()
  let tokenId = event.params._tokenId
  let rentalIndex = getRentalsCount(contractAddress, tokenId)
  let rentalId = buildRentalId(contractAddress, tokenId, rentalIndex.value)
  let rental = Rental.load(rentalId)

  if (rental == null) {
    log.error('An asset was claimed for a rental that doesn\'t exist "{}"', [contractAddress, tokenId.toString()])
    return
  }

  rental.isActive = false
  rental.ownerHasClaimedAsset = true
  rental.updatedAt = event.block.timestamp
  rental.save()
}
