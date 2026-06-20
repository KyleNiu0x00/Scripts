*******************************
https://apps.apple.com/id6465685823
https://apps.apple.com/id6755513958


[rewrite_local]

^http:\/\/member\.honghukeji\.work\/api\/user url script-response-body https://raw.githubusercontent.com/KyleNiu0x00/Scripts/refs/heads/main/Rewrite/wzzyy.js


^http:\/\/member\.lizhikeji\.com\/api\/user url script-response-body https://raw.githubusercontent.com/KyleNiu0x00/Scripts/refs/heads/main/Rewrite/wzzyy.js

[mitm] 
hostname = member.lizhikeji.com, member.honghukeji.work
*******************************/
let body = $response.body;
let obj = JSON.parse(body);


    obj.result.expiresDate = “2099-12-31T23:59:59Z”;
    obj.result.isPermanent = true;


body = JSON.stringify(obj);
$done({body});
