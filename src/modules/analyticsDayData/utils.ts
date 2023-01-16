import { BigInt, ethereum } from '@graphprotocol/graph-ts'
import { AnalyticsDayData } from '../../entities/schema'

export function getAnalyticsDayData(event: ethereum.Event): AnalyticsDayData {
  let secondsInDay = 86400

  let analyticsDayDataIdI32 = event.block.timestamp.toI32() / secondsInDay
  let analyticsDayDataId = analyticsDayDataIdI32.toString()
  let analyticsDayData = AnalyticsDayData.load(analyticsDayDataId)

  if (analyticsDayData == null) {
    analyticsDayData = new AnalyticsDayData(analyticsDayDataId)
    analyticsDayData.date = analyticsDayDataIdI32 * secondsInDay
    analyticsDayData.rentals = 0
    analyticsDayData.volume = BigInt.fromI32(0)
    analyticsDayData.lessorEarnings = BigInt.fromI32(0)
    analyticsDayData.feeCollectorEarnings = BigInt.fromI32(0)
  }

  return analyticsDayData
}
