/*
微信：HOPE-RP
软件下载地址：https://apps.apple.com/us/app/nymf-%E8%89%BA%E6%9C%AF%E9%A1%B9%E7%9B%AE%E8%A3%B8%E4%BD%93%E6%91%84%E5%BD%B1/id1495951015?l=zh
解锁图片、视频
**********************
[riwrute_local]
^https:\/\/nymfapp.com\/api.* url script-response-body https://raw.githubusercontent.com/hanshaoUi/QX/main/pojie/nyfm.js
[mitm]
hostname = nymfapp.com
**********************

*/


let Premium = $response.body;
var modified = JSON.parse(Premium);

function recursiveReplace(obj) {
  for (var key in obj) {
    if (typeof obj[key] === 'object') {
      recursiveReplace(obj[key]); // 递归处理对象或数组
    } else if (key === 'pro' && obj[key] === true) {
      obj[key] = false; // 替换匹配到的值
    }
  }
}

recursiveReplace(modified);

$done({ body: JSON.stringify(modified) });
