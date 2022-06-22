/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prefer-const */
import { BigInt } from '@graphprotocol/graph-ts'
import { Count } from '../../entities/schema'

export const ALL_RENTALS_ID = 'all-rentals'

function buildCount(countId: string): Count {
  let count = Count.load(countId)

  if (count == null) {
    count = new Count(countId)
    count.value = BigInt.fromI32(0)
  }

  return count as Count
}

export function getAllRentalsNextCount(): Count {
  let count = buildCount(ALL_RENTALS_ID)
  count.value = count.value.plus(BigInt.fromI32(1))
  return count
}

export function getAllRentalsCount(): Count {
  let count = buildCount(ALL_RENTALS_ID)
  return count
}

export function getRentalsNextCount(contractAddress: string, tokenId: BigInt): Count {
  let count = buildCount(contractAddress + '-' + tokenId.toString())
  count.value = count.value.plus(BigInt.fromI32(1))
  return count
}

export function getRentalsCount(contractAddress: string, tokenId: BigInt): Count {
  let count = buildCount(contractAddress + '-' + tokenId.toString())
  return count
}
