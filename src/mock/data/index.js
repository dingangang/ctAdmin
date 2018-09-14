/* eslint no-unused-vars: 0 */
const Mock = require('mockjs')

let Random = Mock.Random

Random.extend({
  constellation: function (date) {
    let constellation = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
    return this.pick(constellation)
  }
})

Mock.mock(/\/api\/data\/chuku(.*?)/, (params) => {
  console.log(params)
  return Mock.mock({
    'data|3691': [
      {
        'ProductID|+1': 3611806030610101,
        'OID|+1': 1,
        'OnlyID|+1': 823817,
        'ProductGroupOID|1-1421': 1,
        'MaterialCode|+1': 2130200308019001000,
        'MaterialName|1': ['130g天阳再生牛卡纸2100mm合格品', '85g天阳再生牛卡纸1300mm一等品', '85g天阳再生牛卡纸1350mm一等品'],
        'BatchNO|1': [201806, 201807],
        'ProductType': '再生牛卡纸',
        'ProductName': '工业用纸',
        'TradeMarkName': '天阳',
        'Basisweight|80-160': 1,
        'LabelWidth|800-2500': 1,
        'LabelWidthUnit': 'mm',
        'LabelLength|4800-11200': 100,
        'LabelDiameter|1000-1250': 10,
        'Grade|1': ['一等品', '合格品', '处理品'],
        'PaperCert': '',
        'PackType': '',
        'PolyHookType': '',
        'SpecCustName': '',
        'SpecProdName': '',
        'WhiteFlagType': '普通证',
        'OrderNO': '',
        'SpecialCustomer': '',
        'CoreDiameter': 3.00,
        'CalcWeight|618-2358': 1,
        'GrossWeight|648-2361': 1,
        'WeightMode': '计重',
        'LabelWeight|644-2357': 1,
        'DateProd': '@date(\'yyyy-MM-dd\')',
        'ShiftID|1-2': 1,
        'Remark|1': ['直径', '尘埃', '反向', '褶皱', '', '吸水', '色相'],
        'Standard|1': 'Q/0882 THZ001-2018',
        'WinderDestination|1': [601, 602, 603, 801, 802, 803, 804, 805, 806],
        'MachineID|1': 36,
        'CustTrademark': '',
        'LocationOID|+1': 378,
        'LocationPosition|1': ['(1,30,1,1)', '(1,31,1,1)'],
        'Bay|1-12': 1,
        'Line|18-28': 1,
        'Level|1-13': 1,
        'Location|1-15': 1,
        'CellOID|+1': 378,
        'CellGroupOID|6-3491': 1,
        'LaneWay|1-6': 1,
        'InfeedType': 'Infeed',
        'InfeedTime': '@datetime'
      }
    ]
  })
})
