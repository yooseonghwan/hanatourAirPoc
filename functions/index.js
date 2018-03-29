/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

// [START functionsimport]
const functions = require('firebase-functions');
// [END functionsimport]
// [START additionalimports]
// Moments library to format dates.
const moment = require('moment');
// CORS Express middleware to enable CORS Requests.
const cors = require('cors')({
  origin: true,
});
// [END additionalimports]

// [START all]
/**
 * Returns the server's date. You must provide a `format` URL query parameter or `format` vaue in
 * the request body with which we'll try to format the date.
 *
 * Format must follow the Node moment library. See: http://momentjs.com/
 *
 * Example format: "MMMM Do YYYY, h:mm:ss a".
 * Example request using URL query parameters:
 *   https://us-central1-<project-id>.cloudfunctions.net/date?format=MMMM%20Do%20YYYY%2C%20h%3Amm%3Ass%20a
 * Example request using request body with cURL:
 *   curl -H 'Content-Type: application/json' /
 *        -d '{"format": "MMMM Do YYYY, h:mm:ss a"}' /
 *        https://us-central1-<project-id>.cloudfunctions.net/date
 *
 * This endpoint supports CORS.
 */
// [START trigger]
exports.data = functions.https.onRequest((req, res) => {
  // [END trigger]
  // [START sendError]
  // Forbidding PUT requests.
  if (req.method === 'PUT') {
    return res.status(403).send('Forbidden!');
  }
  // [END sendError]

  // [START usingMiddleware]
  // Enable CORS using the `cors` express middleware.
  return cors(req, res, () => {
    // [END usingMiddleware]
    // Reading date format from URL query parameter.
    // [START readQueryParam]
    let format = req.query.format;
    // [END readQueryParam]
    // Reading date format from request body query parameter
    if (!format) {
      // [START readBodyParam]
      format = req.body.format;
      // [END readBodyParam]
    }
    // [START sendResponse]


   // var result = { "nine": 9, "ten": 10, "eleven": 11 };
    var result = {result: [
      {
        'airLogo': 'http://image1.hanatour.com/2010/images/airline/VN.png',
        'airName': '베트남항공',
        'card': '성인/우리카드외 4건',
        'amount': '258,000원',
        'etc': '유류할증료, 제세공과금 포함', 
        'type': '1', 
        'LinkUrl':'http://mair.hanatour.com/international/schd_list?param={"chdByFareIdRQ":{"ItinType":"RT","NoOfAdtPax":"1","NoOfChdPax":"0","NoOfIntPax":"0","RiSeatStatus":"Y","OrderBy":"ASC","Renewal":"Y","RtnOpenInd":"N","CabinClass":"Y","LengthOfStay":"","SeatStatus":"OK","AirCode":"","NewComp":"Y","FareCnt":"5","CRuleType":"A","FareType":"V","ItinList":[{"DepApo":"SEL","ArrApo":"BKK","DepDate":"20180427","ArrDate":"20180502","DepApoNm":"BKK","ArrApoNm":"SEL"}],"CpcCode":"","FareID":"selSkdFare=1508537^ZE0513ICNBKK-H21^ZE0513ICNBKK-63^20180427^T^KRW^3826584$adt=1$chd=0$inf=0","FareRuleID":"1508537^ZE0513ICNBKK-H21^ZE0513ICNBKK-63^20180427^T^KRW^3826584","DepDate":"20180427","ArrDate":"20180501","ViaCnt":"0","MkAirCode":"ZE","MkAirLclName":"이스타항공","MkAirEngName":"","MkFltNo":"0513","Currency":"KRW","FareAdt":"411700","NormalFareAdt":"380000","TaxID":"Actiontype=NonPnrTax$GDS=B$Command=$DummyPnr=0ZEOPENY30MARICNBKKDS1|0ZEOPENY03APRBKKICNDS1$TktCar=ZE$Compartment=Y$TripType=RT$PubFareBasis=$BookingCls=$TktDep=ICN$TktArr=BKK$Itinerary=ICN-BKK-ICN$Currency=KRW$IdtCode=ADT$origin=HANATOUR$cuid=$SearchAll=Y","TaxAdt":"81900","QChargeAdt":"","FuelAdt":"25800","TFeeAdt":"10000","FareChd":"411700","TaxChd":"81900","QChargeChd":"","FuelChd":"25800","TFeeChd":"10000","FareInf":"61200","TaxInf":"1000","QChargeInf":"","FuelInf":"0","TFeeInf":"0","FareCondition":"성인","SeatCnt":"4","ExpDate":"5일","ExpDateCode":"5D","FareStatus":"YY","AutoTktYn":"","IdtCode":"ADT","MinAdtCnt":"1","ViaDesc":"직항","Best":"Y","CardPromotionCnt":"0","CardPromotionList":null}}'
      },
      {
        'airLogo': 'http://image1.hanatour.com/2010/images/airline/KE.png',
        'airName': '대한항공',
        'card': '성인/우리카드외 3건',
        'amount': '558,000원',
        'etc': '유류할증료, 제세공과금 포함',
        'type': '2', 
        'LinkUrl':"http://mair.hanatour.com/international/schd_list?param={'chdByFareIdRQ':{'tinType':'RT','NoOfAdtPax':'1','NoOfChdPax':'0','NoOfIntPax':'0','RiSeatStatus':'Y','OrderBy':'ASC','Renewal':'Y','RtnOpenInd':'N','CabinClass':'Y','LengthOfStay':'','SeatStatus':'OK','AirCode':'','NewComp':'Y','FareCnt':'5','CRuleType':'A','FareType':'V','ItinList':[{'DepApo':'SEL','ArrApo':'BKK','DepDate':'20180427','ArrDate':'20180502','DepApoNm':'BKK','ArrApoNm':'SEL'}],'CpcCode':'','FareID':'selSkdFare=1508537^ZE0513ICNBKK-H21^ZE0513ICNBKK-63^20180427^T^KRW^3826584$adt=1$chd=0$inf=0','FareRuleID':'1508537^ZE0513ICNBKK-H21^ZE0513ICNBKK-63^20180427^T^KRW^3826584','DepDate':'20180427','ArrDate':'20180501','ViaCnt':'0','MkAirCode':'ZE','MkAirLclName':'이스타항공','MkAirEngName':'','MkFltNo':'0513','Currency':'KRW','FareAdt':'411700','NormalFareAdt':'380000','TaxID':'Actiontype=NonPnrTax$GDS=B$Command=$DummyPnr=0ZEOPENY30MARICNBKKDS1|0ZEOPENY03APRBKKICNDS1$TktCar=ZE$Compartment=Y$TripType=RT$PubFareBasis=$BookingCls=$TktDep=ICN$TktArr=BKK$It"
      },
      {
        'airLogo': 'http://image1.hanatour.com/2010/images/airline/VN.png',
        'airName': '아시아나항공',
        'card': '성인/우리카드외 2건',
        'amount': '248,000원',
        'etc': '유류할증료, 제세공과금 포함',
        'type': '3', 
        'LinkUrl':'http://mair.hanatour.com/international/schd_list?param={%22SchdByFareIdRQ%22:{%22ItinType%22:%22RT%22,%22NoOfAdtPax%22:%221%22,%22NoOfChdPax%22:%220%22,%22NoOfIntPax%22:%220%22,%22RiSeatStatus%22:%22Y%22,%22OrderBy%22:%22ASC%22,%22Renewal%22:%22Y%22,%22RtnOpenInd%22:%22N%22,%22CabinClass%22:%22Y%22,%22LengthOfStay%22:%22%22,%22SeatStatus%22:%22OK%22,%22AirCode%22:%22%22,%22NewComp%22:%22Y%22,%22FareCnt%22:%225%22,%22CRuleType%22:%22A%22,%22FareType%22:%22V%22,%22ItinList%22:[{%22DepApo%22:%22SEL%22,%22ArrApo%22:%22BKK%22,%22DepDate%22:%2220180427%22,%22ArrDate%22:%2220180502%22,%22DepApoNm%22:%22BKK%22,%22ArrApoNm%22:%22SEL%22}],%22CpcCode%22:%22%22,%22FareID%22:%22selSkdFare=1458309^KE0657ICNBKK-H148^KE0657ICNBKK-317^20180427^T^KRW^3683244$adt=1$chd=0$inf=0%22,%22FareRuleID%22:%221458309^KE0657ICNBKK-H148^KE0657ICNBKK-317^20180427^T^KRW^3683244%22,%22DepDate%22:%2220180427%22,%22ArrDate%22:%2220180501%22,%22ViaCnt%22:%220%22,%22MkAirCode%22:%22KE%22,%22MkAirLclName%22:%22%EB%8C%80%ED%95%9C%ED%95%AD%EA%B3%B5%22,%22MkAirEngName%22:%22%22,%22MkFltNo%22:%220657%22,%22Currency%22:%22KRW%22,%22FareAdt%22:%22460000%22,%22NormalFareAdt%22:%22420000%22,%22TaxID%22:%22Actiontype=NonPnrTax$GDS=B$Command=$DummyPnr=0KEOPENY30MARICNBKKDS1|0KEOPENY03APRBKKICNDS1$TktCar=KE$Compartment=Y$TripType=RT$PubFareBasis=$BookingCls=$TktDep=ICN$TktArr=BKK$Itinerary=ICN-BKK-ICN$Currency=KRW$IdtCode=ADT$origin=HANATOUR$cuid=$SearchAll=Y%22,%22TaxAdt%22:%2294800%22,%22QChargeAdt%22:%22%22,%22FuelAdt%22:%2239600%22,%22TFeeAdt%22:%2210000%22,%22FareChd%22:%22355000%22,%22TaxChd%22:%2294800%22,%22QChargeChd%22:%22%22,%22FuelChd%22:%2239600%22,%22TFeeChd%22:%2210000%22,%22FareInf%22:%22101000%22,%22TaxInf%22:%223600%22,%22QChargeInf%22:%22%22,%22FuelInf%22:%220%22,%22TFeeInf%22:%220%22,%22FareCondition%22:%22%EC%84%B1%EC%9D%B8%22,%22SeatCnt%22:%223%22,%22ExpDate%22:%225%EC%9D%BC%22,%22ExpDateCode%22:%225D%22,%22FareStatus%22:%22YY%22,%22AutoTktYn%22:%22%22,%22IdtCode%22:%22ADT%22,%22MinAdtCnt%22:%221%22,%22ViaDesc%22:%22%EC%A7%81%ED%95%AD%22,%22Best%22:%22Y%22,%22CardPromotionCnt%22:%220%22,%22CardPromotionList%22:null}}'
      },
      {
        'airLogo': 'http://image1.hanatour.com/2010/images/airline/7C.png',
        'airName': '제주항공',
        'card': '성인/우리카드외 1건',
        'amount': '124,000원',
        'etc': '유류할증료, 제세공과금 포함',
        'type': '4', 
        'LinkUrl':`http://mair.hanatour.com/international/schd_list?param={"SchdByFareIdRQ":{"ItinType":"OW","NoOfAdtPax":"1","NoOfChdPax":"0","NoOfIntPax":"0","RiSeatStatus":"Y","OrderBy":"ASC","Renewal":"Y","RtnOpenInd":"N","CabinClass":"Y","LengthOfStay":"","SeatStatus":"OK","AirCode":"","NewComp":"Y","FareCnt":"5","CRuleType":"A","FareType":"R","ItinList":[{"DepApo":"SEL","ArrApo":"BKK","DepDate":"20180427","ArrDate":"","DepApoNm":"","ArrApoNm":""}],"CpcCode":"640045","FareID":"/cgi-bin/aaf.cgi?trip=OW$scroll=1$row=2000$segdt=Y$ctrl=NO$comp=Y$CBFare=YY$CBClass=$CBIdt=$DBCharSet=UTF-8$CharSet=UTF-8$L1Code=1000$GroupCode=FG1$L1SiteType=H_MOBILE$GscCode=DEFAULT$L2Code=$L2Grade=$L2SiteCode=$TLType=CT$MobileInd=Y$CRuleType=A$dspmode=xml$rqitin=1$comminfo=y$fbd=SEL$fba=BKK$py=N$dep0=SEL$arr0=BKK$depdate0=20180427$retdate=$dep1=$arr1=$depdate1=$dep2=$arr2=$depdate2=$dep3=$arr3=$depdate3=$car=YY$idt=ALL$tpno=99$adt=1$chd=0$inf=0$inf_st=0$sort=F$CityCheckType=B$LangCode=KOR$Pricing=KRW$header=NO$origin=HANATOUR$fare_origin=HANATOUR$cuid=$carsel=1$itinafsid00=TG-Y-ICNBKK-R050$itinfgid00=TG-Y-ICNBKK-R050$itinaffid00=QROWKR/IN004$itindomid00=$itinalgfgroup00=FG1$itinspcind00=N$itindep00=SEL$itinarr00=BKK$itindomdep00=$itindomarr00=$itindepdate00=20180427$itinfrbs00=QROWKR/IN$itinbkcls00=Q","FareRuleID":"/cgi-bin/if_fare_rule.cgi?trip=OW$scroll=1$row=2000$segdt=Y$ctrl=NO$comp=Y$CBFare=YY$CBClass=$CBIdt=$DBCharSet=UTF-8$CharSet=UTF-8$L1Code=1000$GroupCode=FG1$L1SiteType=H_MOBILE$GscCode=DEFAULT$L2Code=$L2Grade=$L2SiteCode=$TLType=CT$MobileInd=Y$CRuleType=A$dspmode=xml$rqitin=1$comminfo=y$fbd=SEL$fba=BKK$py=N$dep0=SEL$arr0=BKK$depdate0=20180427$retdate=$dep1=$arr1=$depdate1=$dep2=$arr2=$depdate2=$dep3=$arr3=$depdate3=$car=YY$idt=ALL$tpno=99$adt=1$chd=0$inf=0$inf_st=0$sort=F$CityCheckType=B$LangCode=KOR$Pricing=KRW$header=NO$origin=HANATOUR$fare_origin=HANATOUR$cuid=$carsel=1$itinafsid00=TG-Y-ICNBKK-R050$itinfgid00=TG-Y-ICNBKK-R050$itinaffid00=QROWKR/IN004$itindomid00=$itinalgfgroup00=FG1$itinspcind00=N$itindep00=SEL$itinarr00=BKK$itindomdep00=$itindomarr00=$itindepdate00=20180427$itinfrbs00=QROWKR/IN$itinbkcls00=Q$tpavg=y","DepDate":"20180427","ArrDate":"","ViaCnt":"1","MkAirCode":"TG","MkAirLclName":"타이항공","MkAirEngName":"","MkFltNo":"0629/0635/0657/0689","Currency":"KRW","FareAdt":"322200","NormalFareAdt":"326400","TaxID":"/cgi-bin/prt.cgi?GDS=B$Actiontype=NonPnrTax$Command=WQ-VTG/PADT/MKRW$LangCode=KOR$Pricing=KRW$DummyPnr=0TGOPENQ27APRICNBKKDS1$PubFareBasis=QRLOWKR$BookingCls=Q$TktCar=TG$Compartment=Y$TripType=OW$TktDep=ICN$TktArr=BKK$Itinerary=ICN-BKK$IdtCode=ADT$Currency=KRW$origin=HANATOUR$DBCharSet=UTF-8$CharSet=UTF-8$L1Code=1000","TaxAdt":"47200","QChargeAdt":"0","FuelAdt":"17300","TFeeAdt":"10000","FareChd":"244800","TaxChd":"0","QChargeChd":"0","FuelChd":"0","TFeeChd":"10000","FareInf":"32700","TaxInf":"0","QChargeInf":"0","FuelInf":"0","TFeeInf":"0","FareCondition":"성인","SeatCnt":"","ExpDate":"1년","ExpDateCode":"366","FareStatus":"YY","AutoTktYn":"Y","IdtCode":"ADT","MinAdtCnt":"1","ViaDesc":"1회경유","Best":"Y","CardPromotionCnt":"6","CardPromotionList":[{"cpcCode":"640045","CpcCode":"640045","CpcDesc":"우리카드","CardFareAdt":"322200","CardFareInf":"32700","CardFareChd":"242400","TFeeAdt":"0","TFeeChd":"0","TFeeInf":"0"},{"cpcCode":"520043","CpcCode":"520043","CpcDesc":"KB국민카드","CardFareAdt":"322200","CardFareInf":"32700","CardFareChd":"242400","TFeeAdt":"0","TFeeChd":"0","TFeeInf":"0"},{"cpcCode":"540159","CpcCode":"540159","CpcDesc":"삼성카드","CardFareAdt":"322200","CardFareInf":"32700","CardFareChd":"242400","TFeeAdt":"0","TFeeChd":"0","TFeeInf":"0"},{"cpcCode":"720076","CpcCode":"720076","CpcDesc":"하나(외환)카드","CardFareAdt":"322200","CardFareInf":"32700","CardFareChd":"242400","TFeeAdt":"0","TFeeChd":"0","TFeeInf":"0"},{"cpcCode":"580132","CpcCode":"580132","CpcDesc":"현대카드","CardFareAdt":"322200","CardFareInf":"32700","CardFareChd":"242400","TFeeAdt":"0","TFeeChd":"0","TFeeInf":"0"},{"cpcCode":"550113","CpcCode":"550113","CpcDesc":"신한카드","CardFareAdt":"322200","CardFareInf":"32700","CardFareChd":"242400","TFeeAdt":"0","TFeeChd":"0","TFeeInf":"0"},{"cpcCode":"","CpcCode":"","CpcDesc":"성인","CardFareAdt":"325400","CardFareInf":"32700","CardFareChd":"244800","TFeeAdt":"0","TFeeChd":"0","TFeeInf":"0"}]}}`

      },
      {
        'airLogo': 'http://image1.hanatour.com/2010/images/airline/LJ.png',
        'airName': '진에어',
        'card': '성인/우리카드',
        'amount': '258,000원',
        'etc': '유류할증료, 제세공과금 포함'
        
      //  'LinkUrl':'http://mair.hanatour.com/international/schd_list?param={"SchdByFareIdRQ":{"ItinType":"OW","NoOfAdtPax":"1","NoOfChdPax":"0","NoOfIntPax":"0","RiSeatStatus":"Y","OrderBy":"ASC","Renewal":"Y","RtnOpenInd":"N","CabinClass":"Y","LengthOfStay":"","SeatStatus":"OK","AirCode":"","NewComp":"Y","FareCnt":"5","CRuleType":"A","FareType":"R","ItinList":[{"DepApo":"SEL","ArrApo":"BKK","DepDate":"20180427","ArrDate":"","DepApoNm":"","ArrApoNm":""}],"CpcCode":"640045","FareID":"/cgi-bin/aaf.cgi?trip=OW$scroll=1$row=2000$segdt=Y$ctrl=NO$comp=Y$CBFare=YY$CBClass=$CBIdt=$DBCharSet=UTF-8$CharSet=UTF-8$L1Code=1000$GroupCode=FG1$L1SiteType=H_MOBILE$GscCode=DEFAULT$L2Code=$L2Grade=$L2SiteCode=$TLType=CT$MobileInd=Y$CRuleType=A$dspmode=xml$rqitin=1$comminfo=y$fbd=SEL$fba=BKK$py=N$dep0=SEL$arr0=BKK$depdate0=20180427$retdate=$dep1=$arr1=$depdate1=$dep2=$arr2=$depdate2=$dep3=$arr3=$depdate3=$car=YY$idt=ALL$tpno=99$adt=1$chd=0$inf=0$inf_st=0$sort=F$CityCheckType=B$LangCode=KOR$Pricing=KRW$header=NO$origin=HANATOUR$fare_origin=HANATOUR$cuid=$carsel=1$itinafsid00=TG-Y-ICNBKK-R050$itinfgid00=TG-Y-ICNBKK-R050$itinaffid00=QROWKR/IN004$itindomid00=$itinalgfgroup00=FG1$itinspcind00=N$itindep00=SEL$itinarr00=BKK$itindomdep00=$itindomarr00=$itindepdate00=20180427$itinfrbs00=QROWKR/IN$itinbkcls00=Q","FareRuleID":"/cgi-bin/if_fare_rule.cgi?trip=OW$scroll=1$row=2000$segdt=Y$ctrl=NO$comp=Y$CBFare=YY$CBClass=$CBIdt=$DBCharSet=UTF-8$CharSet=UTF-8$L1Code=1000$GroupCode=FG1$L1SiteType=H_MOBILE$GscCode=DEFAULT$L2Code=$L2Grade=$L2SiteCode=$TLType=CT$MobileInd=Y$CRuleType=A$dspmode=xml$rqitin=1$comminfo=y$fbd=SEL$fba=BKK$py=N$dep0=SEL$arr0=BKK$depdate0=20180427$retdate=$dep1=$arr1=$depdate1=$dep2=$arr2=$depdate2=$dep3=$arr3=$depdate3=$car=YY$idt=ALL$tpno=99$adt=1$chd=0$inf=0$inf_st=0$sort=F$CityCheckType=B$LangCode=KOR$Pricing=KRW$header=NO$origin=HANATOUR$fare_origin=HANATOUR$cuid=$carsel=1$itinafsid00=TG-Y-ICNBKK-R050$itinfgid00=TG-Y-ICNBKK-R050$itinaffid00=QROWKR/IN004$itindomid00=$itinalgfgroup00=FG1$itinspcind00=N$itindep00=SEL$itinarr00=BKK$itindomdep00=$itindomarr00=$itindepdate00=20180427$itinfrbs00=QROWKR/IN$itinbkcls00=Q$tpavg=y","DepDate":"20180427","ArrDate":"","ViaCnt":"1","MkAirCode":"TG","MkAirLclName":"타이항공","MkAirEngName":"","MkFltNo":"0629/0635/0657/0689","Currency":"KRW","FareAdt":"322200","NormalFareAdt":"326400","TaxID":"/cgi-bin/prt.cgi?GDS=B$Actiontype=NonPnrTax$Command=WQ-VTG/PADT/MKRW$LangCode=KOR$Pricing=KRW$DummyPnr=0TGOPENQ27APRICNBKKDS1$PubFareBasis=QRLOWKR$BookingCls=Q$TktCar=TG$Compartment=Y$TripType=OW$TktDep=ICN$TktArr=BKK$Itinerary=ICN-BKK$IdtCode=ADT$Currency=KRW$origin=HANATOUR$DBCharSet=UTF-8$CharSet=UTF-8$L1Code=1000","TaxAdt":"47200","QChargeAdt":"0","FuelAdt":"17300","TFeeAdt":"10000","FareChd":"244800","TaxChd":"0","QChargeChd":"0","FuelChd":"0","TFeeChd":"10000","FareInf":"32700","TaxInf":"0","QChargeInf":"0","FuelInf":"0","TFeeInf":"0","FareCondition":"성인","SeatCnt":"","ExpDate":"1년","ExpDateCode":"366","FareStatus":"YY","AutoTktYn":"Y","IdtCode":"ADT","MinAdtCnt":"1","ViaDesc":"1회경유","Best":"Y","CardPromotionCnt":"6","CardPromotionList":[{"cpcCode":"640045","CpcCode":"640045","CpcDesc":"우리카드","CardFareAdt":"322200","CardFareInf":"32700","CardFareChd":"242400","TFeeAdt":"0","TFeeChd":"0","TFeeInf":"0"},{"cpcCode":"520043","CpcCode":"520043","CpcDesc":"KB국민카드","CardFareAdt":"322200","CardFareInf":"32700","CardFareChd":"242400","TFeeAdt":"0","TFeeChd":"0","TFeeInf":"0"},{"cpcCode":"540159","CpcCode":"540159","CpcDesc":"삼성카드","CardFareAdt":"322200","CardFareInf":"32700","CardFareChd":"242400","TFeeAdt":"0","TFeeChd":"0","TFeeInf":"0"},{"cpcCode":"720076","CpcCode":"720076","CpcDesc":"하나(외환)카드","CardFareAdt":"322200","CardFareInf":"32700","CardFareChd":"242400","TFeeAdt":"0","TFeeChd":"0","TFeeInf":"0"},{"cpcCode":"580132","CpcCode":"580132","CpcDesc":"현대카드","CardFareAdt":"322200","CardFareInf":"32700","CardFareChd":"242400","TFeeAdt":"0","TFeeChd":"0","TFeeInf":"0"},{"cpcCode":"550113","CpcCode":"550113","CpcDesc":"신한카드","CardFareAdt":"322200","CardFareInf":"32700","CardFareChd":"242400","TFeeAdt":"0","TFeeChd":"0","TFeeInf":"0"},{"cpcCode":"","CpcCode":"","CpcDesc":"성인","CardFareAdt":"325400","CardFareInf":"32700","CardFareChd":"244800","TFeeAdt":"0","TFeeChd":"0","TFeeInf":"0"}]}}'
      }
      ]}; 
      
  //    result = result.toString('utf8');
 
    res.status(200).send(result);
    // [END sendResponse]
  });
});


exports.data2 = functions.https.onRequest((req2, res2) => {
  // [END trigger]
  // [START sendError]
  // Forbidding PUT requests.

  // [END sendError]

  // [START usingMiddleware]
  // Enable CORS using the `cors` express middleware.
  return cors(req2, res2, () => {
   


   // var result = { "nine": 9, "ten": 10, "eleven": 11 };
    var result2 = {
    
        'bookNumber': 'H18011351348(예약번호)',
        'peopleNumer': '1인|왕복|베트남항공',
        'bookDate': '2018.02.28(수) 예약 ',
        'startLocation': '인천(ICN)',
        'eneLocation': '오사카(간사이)', 
        'startDate': '2018.06.11(월)',       
        'payDate': '2018. 03. 29(목) 16:14',
        'amount': '1,905,000원',    
        'LinkUrl':'https://mhanafreeair.hanatour.com/reservation/detail.hnt?ResLoc=&HResCode=H18011351348&CuLclName=%ED%95%9C%EC%8A%B9%ED%83%9C'

      }; 
      
  //    result = result.toString('utf8');
 
//  return result;
    res2.status(200).send(result2);
    // [END sendResponse]
  });
});

