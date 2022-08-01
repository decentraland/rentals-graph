/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prefer-const */
import { log } from '@graphprotocol/graph-ts'
import { getAllRentalsNextCount, getNoncesUpdatesHistoryNextCount, getRentalsCount, getRentalsNextCount } from '../modules/count'
import { buildRentalId, DAY_TIMESTAMP } from '../modules/rentals'
import {
  NoncesUpdateAssetHistory,
  NoncesUpdateContractHistory,
  NoncesUpdateHistory,
  NoncesUpdateSingerHistory,
  Rental,
} from '../entities/schema'
import {
  OperatorUpdated,
  AssetRented,
  AssetClaimed,
  AssetNonceUpdated,
  SignerNonceUpdated,
  ContractNonceUpdated,
} from '../entities/Rentals/Rentals'

export function handleAssetRented(event: AssetRented): void {
  let contractAddress = event.params._contractAddress.toHexString()
  let tokenId = event.params._tokenId
  let rentalIndex = getRentalsNextCount(contractAddress, tokenId)
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
  rental.updatedAt = event.block.timestamp
  rental.endsAt = event.block.timestamp.plus(event.params._rentalDays.times(DAY_TIMESTAMP))
  rental.signature = event.params._signature.toHexString()
  rental.isExtension = event.params._isExtension
  rental.save()
  rentalIndex.save()

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

  rental.ownerHasClaimedAsset = true
  rental.updatedAt = event.block.timestamp
  rental.save()
}

export function handleContractNonceUpdated(event: ContractNonceUpdated): void {
  let count = getNoncesUpdatesHistoryNextCount()
  let updateHistory = new NoncesUpdateHistory(count.value.toString())
  updateHistory.sender = event.params._sender.toHexString()
  updateHistory.date = event.block.timestamp
  updateHistory.singerUpdate = null
  updateHistory.assetUpdate = null
  updateHistory.type = 'CONTRACT'
  let updateContractNonceHistory = new NoncesUpdateContractHistory(updateHistory.id)
  updateContractNonceHistory.fromNonce = event.params._from
  updateContractNonceHistory.toNonce = event.params._to
  updateHistory.contractUpdate = updateContractNonceHistory.id
  updateContractNonceHistory.save()
  updateHistory.save()
  count.save()
}

export function handleSignerNonceUpdated(event: SignerNonceUpdated): void {
  let count = getNoncesUpdatesHistoryNextCount()
  let updateHistory = new NoncesUpdateHistory(count.value.toString())
  updateHistory.type = 'SIGNER'
  updateHistory.contractUpdate = null
  updateHistory.assetUpdate = null
  updateHistory.date = event.block.timestamp
  updateHistory.sender = event.params._sender.toHexString()
  let signerUpdateHistory = new NoncesUpdateSingerHistory(updateHistory.id)
  signerUpdateHistory.signer = event.params._signer.toHexString()
  signerUpdateHistory.fromNonce = event.params._from
  signerUpdateHistory.toNonce = event.params._to
  updateHistory.singerUpdate = signerUpdateHistory.id
  signerUpdateHistory.save()
  updateHistory.save()
  count.save()
}

export function handleAssetNonceUpdated(event: AssetNonceUpdated): void {
  let count = getNoncesUpdatesHistoryNextCount()
  let updateHistory = new NoncesUpdateHistory(count.value.toString())
  updateHistory.id = count.value.toString()
  updateHistory.type = 'ASSET'
  updateHistory.sender = event.params._sender.toHexString()
  updateHistory.date = event.block.timestamp
  updateHistory.singerUpdate = null
  updateHistory.contractUpdate = null
  let assetUpdateHistory = new NoncesUpdateAssetHistory(updateHistory.id)
  assetUpdateHistory.fromNonce = event.params._from
  assetUpdateHistory.toNonce = event.params._to
  assetUpdateHistory.signer = event.params._signer.toHexString()
  assetUpdateHistory.tokenId = event.params._tokenId
  assetUpdateHistory.contractAddress = event.params._contractAddress.toHexString()
  updateHistory.assetUpdate = assetUpdateHistory.id
  assetUpdateHistory.save()
  updateHistory.save()
  count.save()
}
