angular.module('myApp', [])
.controller('BankInfoController',BankInfoController);
function BankInfoController() {
   var vm = this;
  vm.bank= [{bank:'--选择银行--',id: 1},{bank:'中国工商银行',id: 2},{bank:'中国农业银行',id: 3},{bank:'中国银行',id: 4},{bank:'中国建设银行',id: 5},{bank:'中国进出口银行',id: 6},{bank:'中国农业发展银行',id: 7},{bank:'交通银行',id: 8},{bank:'中信银行',id: 9},{bank:'光大银行',id: 10},{bank:'华夏银行',id: 11},{bank:'中国民生银行',id: 12},{bank:'广发银行',id: 13},{bank:'招商银行',id: 14},{bank:'兴业银行',id: 15},{bank:'浦发银行',id: 16},{bank:'上海农商银行',id: 17},{bank:'恒丰银行',id: 18},{bank:'渤海银行',id: 19},{bank:'徽商银行',id: 20},{bank:'邮政储蓄银行',id: 21},{bank:'汇丰银行',id: 22},{bank:'东亚银行',id: 23},{bank:'中国人民银行',id: 24},{bank:'国家金库',id: 25},{bank:'其他银行',id: 26}];
  vm.selectBank= vm.bank[0];
  vm.province= [{province:'--请选择--',id: 1},{province:'北京',id: 2},{province:'天津',id: 3},{province:'河北',id: 4},{province:'山西',id: 5},{province:'内蒙古',id: 6},{province:'辽宁',id: 7},{province:'吉林',id: 8},{province:'黑龙江',id: 9},{province:'上海',id: 10},{province:'江苏',id: 11},{province:'浙江',id: 12},{province:'安徽',id: 13},{province:'福建',id: 14},{province:'江西',id: 15},{province:'山东',id: 16},{province:'河南',id: 17},{province:'湖北',id: 18},{province:'湖南',id: 19},{province:'广东',id: 20},{province:'广西',id: 21},{province:'海南',id: 22},{province:'重庆',id: 23},{province:'四川',id: 24},{province:'贵州',id: 25},{province:'云南',id: 26},{province:'西藏',id: 27},{province:'陕西',id: 28},{province:'甘肃',id: 29},{province:'青海',id: 30},{province:'宁夏',id: 31},{province:'新疆',id: 32},{province:'台湾',id: 33},{province:'香港',id: 34},{province:'澳门',id: 35},{province:'海外',id: 36}];
  vm.selectProvince= vm.province[0];
  vm.city=['--选择城市--'];
  vm.selectCity=vm.city[0];
 
 vm.showCity=  function(){
 if (vm.selectProvince.province == '--请选择--') {
   vm.city = ['--选择城市--'];
    vm.selectCity=vm.city[0];
    }
if (vm.selectProvince.province == "北京") {
   vm.city = ['--选择城市--','北京'];
    vm.selectCity=vm.city[0];
    }
 if (vm.selectProvince.province == "江苏") {
    vm.city = ['--选择城市--','南京','无锡','徐州','常州','苏州','南通','连云港','淮安','宿迁','盐城','扬州','泰州','镇江'];
     vm.selectCity=vm.city[0];
     }
 if (vm.selectProvince.province == "河北") {
    vm.city = ['--选择城市--','石家庄','唐山','邯郸','秦皇岛','保定','张家口','承德','廊坊','沧州','衡水','邢台'];
     vm.selectCity=vm.city[0];
     }
 if (vm.selectProvince.province == "山西") {
    vm.city = ['--选择城市--','太原','大同','阳泉','长治','晋城','朔州','忻州','吕梁','晋中','临汾','运城'];
     vm.selectCity=vm.city[0];
     }   
 if (vm.selectProvince.province == "内蒙古") {
    vm.city = ['--选择城市--','呼和浩特','包头','乌海','赤峰','呼伦贝尔','通辽','乌兰察布','鄂尔多斯','巴彦淖尔','阿拉善','锡林郭勒','兴安'];
     vm.selectCity=vm.city[0];
     }   
  if (vm.selectProvince.province == "辽宁") {
    vm.city = ['--选择城市--','沈阳','大连','鞍山','抚顺','本溪','丹东','锦州','营口','阜新','辽阳','盘锦','铁岭','朝阳','葫芦岛'];
     vm.selectCity=vm.city[0];
     }   
  if (vm.selectProvince.province == "吉林") {
    vm.city = ['--选择城市--','长春','吉林','四平','辽源','通化','白山','白城','松原','延边'];
     vm.selectCity=vm.city[0];
     }   
 if (vm.selectProvince.province == "黑龙江") {
    vm.city = ['--选择城市--','哈尔滨','齐齐哈尔','牡丹江','佳木斯','大庆','伊春','鸡西','鹤岗','双鸭山','七台河','绥化','黑河','大兴安岭'];
     vm.selectCity=vm.city[0];
     }   
 if (vm.selectProvince.province == "浙江") {
    vm.city = ['--选择城市--','杭州','宁波','温州','绍兴','湖州','嘉兴','金华','衢州','台州','丽水','舟山'];
     vm.selectCity=vm.city[0];
     }   
 if (vm.selectProvince.province == "安徽") {
    vm.city = ['--选择城市--','合肥','芜湖','蚌埠','淮南','马鞍山','淮北','铜陵','安庆','黄山','阜阳','宿州','滁州','六安','宣城','池州','亳州','巢湖'];
     vm.selectCity=vm.city[0];
     }     
  if (vm.selectProvince.province == "福建") {
    vm.city = ['--选择城市--','福州','莆田','泉州','厦门','漳州','龙岩','三明','南平','宁德'];
     vm.selectCity=vm.city[0];
     }
 if (vm.selectProvince.province == "江西") {
    vm.city = ['--选择城市--','南昌','赣州','宜春','吉安','上饶','抚州','九江','景德镇','萍乡','新余','鹰潭'];
     vm.selectCity=vm.city[0];
     }   
 if (vm.selectProvince.province == "山东") {
    vm.city = ['--选择城市--','济南','青岛','淄博','枣庄','东营','烟台','潍坊','济宁','泰安','威海','日照','滨州','德州','聊城','临沂','菏泽','莱芜'];
     vm.selectCity=vm.city[0];
     }       
 if (vm.selectProvince.province == "河南") {
    vm.city = ['--选择城市--','郑州','开封','洛阳','平顶山','安阳','鹤壁','新乡','焦作','濮阳','许昌','漯河','三门峡','商丘','周口','驻马店','南阳','信阳'];
     vm.selectCity=vm.city[0];
     }
 if (vm.selectProvince.province == "湖北") {
    vm.city = ['--选择城市--','武汉','黄石','十堰','荆州','宜昌','襄樊','鄂州','荆门','黄冈','孝感','咸宁','随州','仙桃','天门','潜江','恩施','神农架'];
     vm.selectCity=vm.city[0];
     }
 if (vm.selectProvince.province == "湖南") {
    vm.city = ['--选择城市--','长沙','株洲','湘潭','衡阳','邵阳','岳阳','张家界','益阳','常德','娄底','郴州','永州','怀化','湘西'];
     vm.selectCity=vm.city[0];
     }     
 if (vm.selectProvince.province == "广东") {
    vm.city = ['--选择城市--','广州','深圳','珠海','汕头','佛山','韶关','湛江','肇庆','江门','茂名','惠州','梅州','汕尾','河源','阳江','清远','东莞','中山','潮州','揭阳','云浮'];
     vm.selectCity=vm.city[0];
     }       
 if (vm.selectProvince.province == "广西") {
    vm.city = ['--选择城市--','南宁','柳州','桂林','梧州','北海','崇左','来宾','贺州','玉林','百色','河池','钦州','防城港','贵港'];
     vm.selectCity=vm.city[0];
     }     
 if (vm.selectProvince.province == "海南") {
    vm.city = ['--选择城市--','海口','三亚','三沙','儋州'];
     vm.selectCity=vm.city[0];
     }
 if (vm.selectProvince.province == "四川") {
    vm.city = ['--选择城市--','成都','绵阳','自贡','攀枝花','泸州','德阳','广元','遂宁','内江','乐山','资阳','宜宾','南充','达州','雅安','广安','巴中','眉山','阿坝','甘孜','凉山'];
     vm.selectCity=vm.city[0];
     }
 if (vm.selectProvince.province == "贵州") {
    vm.city = ['--选择城市--','贵阳','六盘水','遵义','铜仁','毕节','安顺','黔西南','黔东南','黔南'];
     vm.selectCity=vm.city[0];
     }   
 if (vm.selectProvince.province == "云南") {
    vm.city = ['--选择城市--','昆明','昭通','曲靖','玉溪','普洱','保山','丽江','临沧','楚雄','红河','文山','西双版纳','大理','德宏','怒江','迪庆'];
     vm.selectCity=vm.city[0];
     }   
if (vm.selectProvince.province == "西藏") {
    vm.city = ['--选择城市--','拉萨','日喀则','昌都','林芝','山南','那曲','阿里'];
     vm.selectCity=vm.city[0];
     }
if (vm.selectProvince.province == "陕西") {
    vm.city = ['--选择城市--','西安','铜川','宝鸡','咸阳','渭南','汉中','安康','商洛','延安','榆林'];
     vm.selectCity=vm.city[0];
     }
if (vm.selectProvince.province == "甘肃") {
    vm.city = ['--选择城市--','兰州','嘉峪关','金昌','白银','天水','酒泉','张掖','武威','定西','陇南','平凉','庆阳','临夏','甘南'];
     vm.selectCity=vm.city[0];
     }
if (vm.selectProvince.province == "青海") {
    vm.city = ['--选择城市--','西宁','海东','海西','海北','黄南','海南','果洛','玉树'];
     vm.selectCity=vm.city[0];
     }
if (vm.selectProvince.province == "宁夏") {
    vm.city = ['--选择城市--','银川','石嘴山','吴忠','固原','中卫'];
     vm.selectCity=vm.city[0];
     }
if (vm.selectProvince.province == "新疆") {
    vm.city = ['--选择城市--','乌鲁木齐','克拉玛依','吐鲁番','哈密','阿勒泰','昌吉','博尔塔拉蒙古自治州','巴音郭楞蒙古自治州','阿克苏','克孜勒苏柯尔克孜自治州','喀什','和田','伊犁','石河子','阿拉尔','塔城','图木舒克'];
     vm.selectCity=vm.city[0];
     }
if (vm.selectProvince.province == "天津") {
    vm.city = ['--选择城市--','天津'];
     vm.selectCity=vm.city[0];
     }
if (vm.selectProvince.province == "重庆") {
    vm.city = ['--选择城市--','重庆'];
     vm.selectCity=vm.city[0];
     }
 if (vm.selectProvince.province == "上海") {
    vm.city = ['--选择城市--','上海'];
     vm.selectCity=vm.city[0];
     }
if (vm.selectProvince.province == "香港") {
    vm.city = ['--选择城市--','香港'];
     vm.selectCity=vm.city[0];
     }
if (vm.selectProvince.province == "澳门") {
    vm.city = ['--选择城市--','澳门'];
     vm.selectCity=vm.city[0];
     }
if (vm.selectProvince.province == "台湾") {
    vm.city = ['--选择城市--','台湾'];
     vm.selectCity=vm.city[0];
     }
if (vm.selectProvince.province == "海外") {
    vm.city = ['--选择城市--','海外'];
     vm.selectCity=vm.city[0];
     }
}
    vm.showResult= function (){
   if(vm.selectBank.bank =='--选择银行--') {
   alert("请选择银行");
   return;
    }
   if(vm.selectProvince.province =='--请选择--') {
   alert("请选择省份");
   return;
    }
   if(vm.selectCity =='--选择城市--') {
   alert("请选择城市");
   return;
    }
  document.getElementById("bankinfo").innerHTML="<p>请稍后，数据查询中……</p>";
   }
}