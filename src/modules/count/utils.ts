/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prefer-const */
import { BigInt } from '@graphprotocol/graph-ts'
import { Count } from '../../entities/schema'

const ALL_RENTALS_ID = 'all-rentals'

function buildCount(countId: string): Count {
  let count = Count.load(countId)

  if (count == null) {
    count = new Count(countId)
    count.value = BigInt.fromI32(0)
  }

  return count as Count
}

export function getAllRentalsCount(): Count {
  let count = buildCount(ALL_RENTALS_ID)
  return count
}

export function getAllRentalsNextCount(): Count {
  let count = getAllRentalsCount()
  count.value = count.value.plus(BigInt.fromI32(1))
  return count
}

export function getRentalsCount(contractAddress: string, tokenId: BigInt): Count {
  let count = buildCount(contractAddress + '-' + tokenId.toString())
  return count
}

export function getRentalsNextCount(contractAddress: string, tokenId: BigInt): Count {
  let count = getRentalsCount(contractAddress, tokenId)
  count.value = count.value.plus(BigInt.fromI32(1))
  return count
}

export function getIndexesUpdatesHistoryCount(): Count {
  let count = buildCount('all-indexes-updates')
  return count
}

export function getIndexesUpdatesHistoryNextCount(): Count {
  let count = getIndexesUpdatesHistoryCount()
  count.value = count.value.plus(BigInt.fromI32(1))
  return count
}

export function getContractIndexesUpdatesHistoryCount(rentalContractAddress: string): Count {
  let count = buildCount('contract-indexes-updates-' + rentalContractAddress)
  return count
}

export function getContractIndexesUpdatesHistoryNextCount(rentalContractAddress: string): Count {
  let count = getContractIndexesUpdatesHistoryCount(rentalContractAddress)
  count.value = count.value.plus(BigInt.fromI32(1))
  return count
}

export function getSignerIndexesUpdatesHistoryCount(rentalContractAddress: string, signerAddress: string): Count {
  let count = buildCount('signer-indexes-updates-' + rentalContractAddress + '-' + signerAddress)
  return count
}

export function getSignerIndexesUpdatesHistoryNextCount(rentalContractAddress: string, signerAddress: string): Count {
  let count = getSignerIndexesUpdatesHistoryCount(rentalContractAddress, signerAddress)
  count.value = count.value.plus(BigInt.fromI32(1))
  return count
}

export function getAssetIndexesUpdatesHistoryCount(rentalContractAddress: string, contractAddress: string, tokenId: string): Count {
  let count = buildCount('asset-indexes-updates-' + rentalContractAddress + '-' + contractAddress + '-' + tokenId)
  return count
}

export function getAssetIndexesUpdatesHistoryNextCount(): Count {
  let count = getIndexesUpdatesHistoryCount()
  count.value = count.value.plus(BigInt.fromI32(1))
  return count
}
