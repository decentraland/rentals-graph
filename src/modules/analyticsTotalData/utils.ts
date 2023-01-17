import { BigInt } from '@graphprotocol/graph-ts'
import { AnalyticsTotalData } from '../../entities/schema'

export function getAnalyticsTotalData(): AnalyticsTotalData {
  let analyticsTotalDataId = 'analytics-total-data'

  let analyticsTotalData = AnalyticsTotalData.load(analyticsTotalDataId)

  if (analyticsTotalData == null) {
    analyticsTotalData = new AnalyticsTotalData(analyticsTotalDataId)
    analyticsTotalData.rentals = 0
    analyticsTotalData.volume = BigInt.fromI32(0)
    analyticsTotalData.lessorEarnings = BigInt.fromI32(0)
    analyticsTotalData.feeCollectorEarnings = BigInt.fromI32(0)
  }

  return analyticsTotalData
}
