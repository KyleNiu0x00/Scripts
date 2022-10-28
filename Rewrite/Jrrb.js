/******************************

特别说明：今日热榜永久订阅

*******************************
[rewrite_local]
^https://api2.tophub.app/account/sync url script-response-body https://raw.githubusercontent.com/KyleNiu0x00/Scripts/main/Rewrite/Jrrb.js
[mitm] 
hostname = %APPEND% api2.tophub.app
*******************************/


let obj = JSON.parse($response.body);

obj = {
  "error": false,
  "data": {
    "vip_expired": "2566584780",
    "is_vip_now": true,
    "is_vip": "1"
  },
  "status": 200
}
$done({body: JSON.stringify(obj)});
