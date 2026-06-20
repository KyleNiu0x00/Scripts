*******************************
https://apps.apple.com/id6465685823
https://apps.apple.com/id6755513958


[rewrite_local]

^http:\/\/member\.honghukeji\.work\/api\/user url script-response-body https://raw.githubusercontent.com/KyleNiu0x00/Scripts/refs/heads/main/Rewrite/wzzyy.js


^http:\/\/member\.lizhikeji\.com\/api\/user url script-response-body https://raw.githubusercontent.com/KyleNiu0x00/Scripts/refs/heads/main/Rewrite/wzzyy.js

[mitm] 
hostname = member.lizhikeji.com, member.honghukeji.work
*******************************/
var KyleNiu = $response.body;
var obj = JSON.parse(KyleNiu);

var vipInfo = {
  "data": {
    "isPermanent": false,
    "expiresDate": "2099-12-31"
  }
};

for (let key in vipInfo) {
  if (obj.hasOwnProperty(key)) {
    obj[key] = vipInfo[key];
  }
}

KyleNiu = JSON.stringify(obj);
$done(KyleNiu);