*******************************
[rewrite_local]

^http:\/\/member\.honghukeji\.work\/api\/user url script-response-body 


^http:\/\/member\.lizhikeji\.com\/api\/user url script-response-body 



^http:\/\/xihongshi\.dicallapp\.com\/SDGetMeCount\.ashx url script-response-body https://raw.githubusercontent.com/afengye/QX/main/py.js
[mitm] 
hostname = member.lizhikeji.com, member.honghukeji.work
*******************************/

var KyleNiu = $response.body;
var obj =  JSON.parse(KyleNiu);

var vipInfo = {
  "isPermanent": true
}

for (let key in obj.result) {
  if (vipInfo.hasOwnProperty(key)) {
     obj.result[key] = vipInfo[key]
  }
}

KyleNiu = JSON.stringify(obj);
$done(KyleNiu);