/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/ban-types */
import { BigInt } from '@graphprotocol/graph-ts'

export let DAY_TIMESTAMP = BigInt.fromI32(24 * 60 * 60)

export function buildRentalId(contractAddress: string, tokenId: BigInt, index: BigInt): string {
  return contractAddress + ':' + tokenId.toString() + ':' + index.toString()
}
