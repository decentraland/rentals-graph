/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prefer-const */
import { Address, log } from '@graphprotocol/graph-ts'
import { getAllRentalsNextCount, getIndexesUpdatesHistoryNextCount, getRentalsCount, getRentalsNextCount } from '../modules/count'
import { buildRentalId, DAY_TIMESTAMP } from '../modules/rentals'
import {
  IndexesUpdateAssetHistory,
  IndexesUpdateContractHistory,
  IndexesUpdateHistory,
  IndexesUpdateSignerHistory,
  Rental,
  Rentable,
  RentalAsset,
} from '../entities/schema'
import { AssetRented, AssetClaimed, ContractIndexUpdated, SignerIndexUpdated, AssetIndexUpdated } from '../entities/Rentals/Rentals'
import { Rentable as RentableTemplate } from '../entities/templates'

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

  let rentable = Rentable.load(contractAddress)

  if (rentable == null) {
    RentableTemplate.create(Address.fromString(contractAddress))
    rentable = new Rentable(contractAddress)
    rentable.save()
  }

  // RentalAsset

  let rentalAssetId = contractAddress + '-' + tokenId.toString()
  let rentalAsset = RentalAsset.load(rentalAssetId)

  if (rentalAsset == null) {
    rentalAsset = new RentalAsset(rentalAssetId)
  }

  rentalAsset.contractAddress = Address.fromHexString(contractAddress)
  rentalAsset.tokenId = tokenId
  rentalAsset.lessor = Address.fromHexString(rental.lessor)
  rentalAsset.isClaimed = false

  rentalAsset.save()
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

  let rentalAssetId = contractAddress + '-' + tokenId.toString()
  let rentalAsset = RentalAsset.load(rentalAssetId)

  if (rentalAsset == null) {
    console.error('RentalAsset with id "{}" does not exist', [rentalAssetId])
  } else {
    rentalAsset.lessor = null
    rentalAsset.isClaimed = true

    rentalAsset.save()
  }
}

export function handleContractIndexUpdated(event: ContractIndexUpdated): void {
  let count = getIndexesUpdatesHistoryNextCount()
  let updateHistory = new IndexesUpdateHistory(count.value.toString())
  updateHistory.sender = event.params._sender.toHexString()
  updateHistory.date = event.block.timestamp
  updateHistory.singerUpdate = null
  updateHistory.assetUpdate = null
  updateHistory.type = 'CONTRACT'
  let updateContractIndexHistory = new IndexesUpdateContractHistory(updateHistory.id)
  updateContractIndexHistory.newIndex = event.params._newIndex
  updateContractIndexHistory.contractAddress = event.address
  updateHistory.contractUpdate = updateContractIndexHistory.id
  updateContractIndexHistory.save()
  updateHistory.save()
  count.save()
}

export function handleSignerIndexUpdated(event: SignerIndexUpdated): void {
  let count = getIndexesUpdatesHistoryNextCount()
  let updateHistory = new IndexesUpdateHistory(count.value.toString())
  updateHistory.type = 'SIGNER'
  updateHistory.contractUpdate = null
  updateHistory.assetUpdate = null
  updateHistory.date = event.block.timestamp
  updateHistory.sender = event.params._sender.toHexString()
  let signerUpdateHistory = new IndexesUpdateSignerHistory(updateHistory.id)
  signerUpdateHistory.signer = event.params._signer.toHexString()
  signerUpdateHistory.newIndex = event.params._newIndex
  updateHistory.singerUpdate = signerUpdateHistory.id
  signerUpdateHistory.save()
  updateHistory.save()
  count.save()
}

export function handleAssetIndexUpdated(event: AssetIndexUpdated): void {
  let count = getIndexesUpdatesHistoryNextCount()
  let updateHistory = new IndexesUpdateHistory(count.value.toString())
  updateHistory.id = count.value.toString()
  updateHistory.type = 'ASSET'
  updateHistory.sender = event.params._sender.toHexString()
  updateHistory.date = event.block.timestamp
  updateHistory.singerUpdate = null
  updateHistory.contractUpdate = null
  let assetUpdateHistory = new IndexesUpdateAssetHistory(updateHistory.id)
  assetUpdateHistory.newIndex = event.params._newIndex
  assetUpdateHistory.signer = event.params._signer.toHexString()
  assetUpdateHistory.tokenId = event.params._tokenId
  assetUpdateHistory.contractAddress = event.params._contractAddress.toHexString()
  updateHistory.assetUpdate = assetUpdateHistory.id
  assetUpdateHistory.save()
  updateHistory.save()
  count.save()
}
