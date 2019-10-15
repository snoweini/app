//index.js
//获取应用实例
const msg = require('../../utils/util.js');
function SolarTerm(DateGL){
  var DDDD = DateGL.getFullYear() + "/" + [DateGL.getMonth() + 1] + "/" + DateGL.getDate();
  var getday = DateGL.getDay();
  var week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][getday];
  var SolarTermStr = new Array(
    "小寒,xiaohan", "大寒,dahan", "立春,lichun", "雨水,yushui", "惊蛰,jingzhe", "春分,chunfen",
    "清明,qingming", "谷雨,guyu", "立夏,lixia", "小满,xiaoman", "芒种,mangzhong", "夏至,xiazhi",
    "小暑,xiaoshu", "大暑,dashu", "立秋,liqiu", "处暑,chushu", "白露,bailu", "秋分,qiufen",
    "寒露,hanlu", "霜降,shuangjiang", "立冬,lidong", "小雪,xiaoxue", "大雪,daxue", "冬至,dongzhi");
  var DifferenceInMonth = new Array(
    1272060, 1275495, 1281180, 1289445, 1299225, 1310355,
    1321560, 1333035, 1342770, 1350855, 1356420, 1359045,
    1358580, 1355055, 1348695, 1340040, 1329630, 1318455,
    1306935, 1297380, 1286865, 1277730, 1274550, 1271556);
  var DifferenceInYear = 31556926;
  var BeginTime = new Date(1901 / 1 / 1);
  BeginTime.setTime(947120460000);
  for (; DateGL.getFullYear() < BeginTime.getFullYear();) {
    BeginTime.setTime(BeginTime.getTime() - DifferenceInYear * 1000);
  }
  for (; DateGL.getFullYear() > BeginTime.getFullYear();) {
    BeginTime.setTime(BeginTime.getTime() + DifferenceInYear * 1000);
  }
  for (var M = 0; DateGL.getMonth() > BeginTime.getMonth(); M++) {
    BeginTime.setTime(BeginTime.getTime() + DifferenceInMonth[M] * 1000);
  }
  if (DateGL.getDate() > BeginTime.getDate()) {
    BeginTime.setTime(BeginTime.getTime() + DifferenceInMonth[M] * 1000);
    M++;
  }
  if (DateGL.getDate() > BeginTime.getDate()) {
    BeginTime.setTime(BeginTime.getTime() + DifferenceInMonth[M] * 1000);
    M == 23 ? M = 0 : M++;
  }
  var JQ = "";
  if (DateGL.getDate() == BeginTime.getDate()) {
    JQ += " 今日";
  }
  else if (DateGL.getDate() == BeginTime.getDate() - 1) {
    JQ += " 明日";
  }
  else if (DateGL.getDate() == BeginTime.getDate() - 2) {
    JQ += " 后日";
  }
  else {
    JQ = "";
    if (DateGL.getMonth() == BeginTime.getMonth()) {
      JQ += " 本月";
    }
    else {
      JQ += " 下月";
    }
    JQ += BeginTime.getDate() + "日";
  }
  return { dd: DDDD, week: week, jqtxt: JQ, jieq: SolarTermStr[M].split(',')[0], jieqi: SolarTermStr[M].split(',')[1] };
}
var d = SolarTerm(new Date());
Page({
  data: {
    list:msg.message,
    week:d.week,
    dd:d.dd,
    jq:d.jieq,
    jqdate:d.jqtxt,
    jqtxt:d.jieqi
  },
  onLoad(){
    console.log(1)
  },
  pageTo(e){
    var index = e.currentTarget.dataset['index'];
    wx.navigateTo({
      url: '../main/main?jq='+index,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
    console.log(index)
  }
})
