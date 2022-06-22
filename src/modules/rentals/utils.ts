/* eslint-disable @typescript-eslint/ban-types */
import { BigInt } from '@graphprotocol/graph-ts'

export function buildRentalId(contractAddress: string, tokenId: BigInt, index: BigInt): string {
  return contractAddress + ':' + tokenId.toString() + ':' + index.toString()
}
