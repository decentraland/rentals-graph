import { BigInt } from '@graphprotocol/graph-ts'
import { RentalsContract } from '../../entities/schema'

export function getRentalsContract(): RentalsContract {
  let rentalsContractId = 'rentals-contract'
  let rentalsContract = RentalsContract.load(rentalsContractId)

  if (rentalsContract == null) {
    rentalsContract = new RentalsContract(rentalsContractId)
    rentalsContract.fee = BigInt.fromI32(0)
  }

  return rentalsContract
}
