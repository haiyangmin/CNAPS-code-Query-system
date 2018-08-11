angular.module('myApp')
.controller('BankInfoController',BankInfoController);
BankInfoController.$inject = ['$http'];
   function BankInfoController($http) {
  var vm = this;  
  vm.pageSize = 10;
  vm.sort = function(keyname){
        vm.sortKey = keyname;   //set the sortKey to the param passed
        vm.reverse = !$scope.reverse; //if true make it false and vice versa
    };
  vm.bank= ['--选择银行--','中国工商银行','中国农业银行','中国银行','中国建设银行','中国进出口银行', '中国农业发展银行','交通银行','中信银行','光大银行','华夏银行','中国民生银行','广发银行','招商银行','兴业银行','浦发银行','上海农商银行','恒丰银行','渤海银行','徽商银行','邮政储蓄银行','汇丰银行','东亚银行','中国人民银行','国家金库','其他'];
  vm.selectBank= vm.bank[0];
  vm.province= ['--请选择--','北京','天津','河北','山西','内蒙古','辽宁','吉林','黑龙江','上海','江苏','浙江','安徽','福建','江西','山东','河南','湖北','湖南','广东','广西','海南','重庆','四川','贵州','云南','西藏','陕西','甘肃','青海','宁夏','新疆','台湾','香港','澳门','海外'];
  vm.selectProvince= vm.province[0];
  vm.city=['--选择城市--'];
  vm.selectCity=vm.city[0];
 vm.showCity=  function(){
 if (vm.selectProvince== '--请选择--') {
   vm.city = ['--选择城市--'];
    vm.selectCity=vm.city[0];
    }
if (vm.selectProvince== "北京") {
   vm.city = ['--选择城市--','北京'];
    vm.selectCity=vm.city[0];
    }
 if (vm.selectProvince == "江苏") {
    vm.city = ['--选择城市--','南京','无锡','徐州','常州','苏州','南通','连云港','淮安','宿迁','盐城','扬州','泰州','镇江'];
     vm.selectCity=vm.city[0];
     }
 if (vm.selectProvince == "河北") {
    vm.city = ['--选择城市--','石家庄','唐山','邯郸','秦皇岛','保定','张家口','承德','廊坊','沧州','衡水','邢台'];
     vm.selectCity=vm.city[0];
     }
 if (vm.selectProvince == "山西") {
    vm.city = ['--选择城市--','太原','大同','阳泉','长治','晋城','朔州','忻州','吕梁','晋中','临汾','运城'];
     vm.selectCity=vm.city[0];
     }   
 if (vm.selectProvince == "内蒙古") {
    vm.city = ['--选择城市--','呼和浩特','包头','乌海','赤峰','呼伦贝尔','通辽','乌兰察布','鄂尔多斯','巴彦淖尔','阿拉善','锡林郭勒','兴安'];
     vm.selectCity=vm.city[0];
     }   
  if (vm.selectProvince == "辽宁") {
    vm.city = ['--选择城市--','沈阳','大连','鞍山','抚顺','本溪','丹东','锦州','营口','阜新','辽阳','盘锦','铁岭','朝阳','葫芦岛'];
     vm.selectCity=vm.city[0];
     }   
  if (vm.selectProvince == "吉林") {
    vm.city = ['--选择城市--','长春','吉林','四平','辽源','通化','白山','白城','松原','延边'];
     vm.selectCity=vm.city[0];
     }   
 if (vm.selectProvince == "黑龙江") {
    vm.city = ['--选择城市--','哈尔滨','齐齐哈尔','牡丹江','佳木斯','大庆','伊春','鸡西','鹤岗','双鸭山','七台河','绥化','黑河','大兴安岭'];
     vm.selectCity=vm.city[0];
     }   
 if (vm.selectProvince == "浙江") {
    vm.city = ['--选择城市--','杭州','宁波','温州','绍兴','湖州','嘉兴','金华','衢州','台州','丽水','舟山'];
     vm.selectCity=vm.city[0];
     }   
 if (vm.selectProvince == "安徽") {
    vm.city = ['--选择城市--','合肥','芜湖','蚌埠','淮南','马鞍山','淮北','铜陵','安庆','黄山','阜阳','宿州','滁州','六安','宣城','池州','亳州','巢湖'];
     vm.selectCity=vm.city[0];
     }     
  if (vm.selectProvince == "福建") {
    vm.city = ['--选择城市--','福州','莆田','泉州','厦门','漳州','龙岩','三明','南平','宁德'];
     vm.selectCity=vm.city[0];
     }
 if (vm.selectProvince == "江西") {
    vm.city = ['--选择城市--','南昌','赣州','宜春','吉安','上饶','抚州','九江','景德镇','萍乡','新余','鹰潭'];
     vm.selectCity=vm.city[0];
     }   
 if (vm.selectProvince == "山东") {
    vm.city = ['--选择城市--','济南','青岛','淄博','枣庄','东营','烟台','潍坊','济宁','泰安','威海','日照','滨州','德州','聊城','临沂','菏泽','莱芜'];
     vm.selectCity=vm.city[0];
     }       
 if (vm.selectProvince == "河南") {
    vm.city = ['--选择城市--','郑州','开封','洛阳','平顶山','安阳','鹤壁','新乡','焦作','濮阳','许昌','漯河','三门峡','商丘','周口','驻马店','南阳','信阳'];
     vm.selectCity=vm.city[0];
     } 
 if (vm.selectProvince == "湖北") {
    vm.city = ['--选择城市--','武汉','黄石','十堰','荆州','宜昌','襄樊','鄂州','荆门','黄冈','孝感','咸宁','随州','仙桃','天门','潜江','恩施','神农架'];
     vm.selectCity=vm.city[0];
     } 
 if (vm.selectProvince == "湖南") {
    vm.city = ['--选择城市--','长沙','株洲','湘潭','衡阳','邵阳','岳阳','张家界','益阳','常德','娄底','郴州','永州','怀化','湘西'];
     vm.selectCity=vm.city[0];
     }     
 if (vm.selectProvince == "广东") {
    vm.city = ['--选择城市--','广州','深圳','珠海','汕头','佛山','韶关','湛江','肇庆','江门','茂名','惠州','梅州','汕尾','河源','阳江','清远','东莞','中山','潮州','揭阳','云浮'];
     vm.selectCity=vm.city[0];
     }       
 if (vm.selectProvince == "广西") {
    vm.city = ['--选择城市--','南宁','柳州','桂林','梧州','北海','崇左','来宾','贺州','玉林','百色','河池','钦州','防城港','贵港'];
     vm.selectCity=vm.city[0];
     }     
 if (vm.selectProvince == "海南") {
    vm.city = ['--选择城市--','海口','三亚','三沙','儋州'];
     vm.selectCity=vm.city[0];
     } 
 if (vm.selectProvince == "四川") {
    vm.city = ['--选择城市--','成都','绵阳','自贡','攀枝花','泸州','德阳','广元','遂宁','内江','乐山','资阳','宜宾','南充','达州','雅安','广安','巴中','眉山','阿坝','甘孜','凉山'];
     vm.selectCity=vm.city[0];
     } 
 if (vm.selectProvince == "贵州") {
    vm.city = ['--选择城市--','贵阳','六盘水','遵义','铜仁','毕节','安顺','黔西南','黔东南','黔南'];
     vm.selectCity=vm.city[0];
     }   
 if (vm.selectProvince == "云南") {
    vm.city = ['--选择城市--','昆明','昭通','曲靖','玉溪','普洱','保山','丽江','临沧','楚雄','红河','文山','西双版纳','大理','德宏','怒江','迪庆'];
     vm.selectCity=vm.city[0];
     }   
if (vm.selectProvince == "西藏") {
    vm.city = ['--选择城市--','拉萨','日喀则','昌都','林芝','山南','那曲','阿里'];
     vm.selectCity=vm.city[0];
     } 
if (vm.selectProvince == "陕西") {
    vm.city = ['--选择城市--','西安','铜川','宝鸡','咸阳','渭南','汉中','安康','商洛','延安','榆林'];
     vm.selectCity=vm.city[0];
     } 
if (vm.selectProvince == "甘肃") {
    vm.city = ['--选择城市--','兰州','嘉峪关','金昌','白银','天水','酒泉','张掖','武威','定西','陇南','平凉','庆阳','临夏','甘南'];
     vm.selectCity=vm.city[0];
     } 
if (vm.selectProvince == "青海") {
    vm.city = ['--选择城市--','西宁','海东','海西','海北','黄南','海南','果洛','玉树'];
     vm.selectCity=vm.city[0];
     } 
if (vm.selectProvince == "宁夏") {
    vm.city = ['--选择城市--','银川','石嘴山','吴忠','固原','中卫'];
     vm.selectCity=vm.city[0];
     } 
if (vm.selectProvince == "新疆") {
    vm.city = ['--选择城市--','乌鲁木齐','克拉玛依','吐鲁番','哈密','阿勒泰','昌吉','博尔塔拉蒙古自治州','巴音郭楞蒙古自治州','阿克苏','克孜勒苏柯尔克孜自治州','喀什','和田','伊犁','石河子','阿拉尔','塔城','图木舒克'];
     vm.selectCity=vm.city[0];
     } 
if (vm.selectProvince == "天津") {
    vm.city = ['--选择城市--','天津'];
     vm.selectCity=vm.city[0];
     } 
if (vm.selectProvince == "重庆") {
    vm.city = ['--选择城市--','重庆'];
     vm.selectCity=vm.city[0];
     } 
 if (vm.selectProvince == "上海") {
    vm.city = ['--选择城市--','上海'];
     vm.selectCity=vm.city[0];
     } 
if (vm.selectProvince == "香港") {
    vm.city = ['--选择城市--','香港'];
     vm.selectCity=vm.city[0];
     } 
if (vm.selectProvince == "澳门") {
    vm.city = ['--选择城市--','澳门'];
     vm.selectCity=vm.city[0];
     } 
if (vm.selectProvince == "台湾") {
    vm.city = ['--选择城市--','台湾'];
     vm.selectCity=vm.city[0];
     } 
if (vm.selectProvince == "海外") {
    vm.city = ['--选择城市--','海外'];
     vm.selectCity=vm.city[0];
     } 
}
vm.getData= function (){
   if(vm.selectBank =='--选择银行--') {
   alert("请选择银行");
   return;
    }
   if(vm.selectProvince =='--请选择--') {
   alert("请选择省份");
   return;
    }
   if(vm.selectCity =='--选择城市--') {
   alert("请选择城市");
   return;
    }
 vm.myValue = true; 
 vm.table = false;
 //alert(vm.selectBank);
 //alert(vm.selectProvince);
 //alert(vm.selectCity);
 //alert("/users/bankcode/provinces/" + vm.selectProvince + "/"+ "city/" + vm.selectCity + "/"+ "bank/" + vm.selectBank);
 document.getElementById("bankinfo").innerHTML="<p>请稍后，数据查询中……</p>";
 $http.get("/users/bankcode/provinces/" + vm.selectProvince + "/"+ "city/" + vm.selectCity + "/"+ "bank/" + vm.selectBank
   )
.then(function mySuccess(response) {
    //alert(typeof response.data);
    //alert (response.status);
   // alert (response.statusText);
   vm.myData = response.data ;
   //alert(vm.myData.length);
   if(vm.myData.length == 0){
    vm.table = false;
    vm.myValue = true;
    document.getElementById("bankinfo").innerHTML="<p>无结果，请重新查询……</p>";
   }
  else { vm.table = true;
   vm.myValue = false;}
}, 
function myError(response) { 
    vm.myData = response.statusText;
});
   } 

   vm.load= function (){
     $http.get("/users/bankcode/provinces/北京/city/北京/bank/中国银行"
       )
       .then(function mySuccess(response) {
        //alert(typeof response.data);
        //alert (response.status);
        //alert (response.statusText);
          vm.myData = response.data ;
         // alert(vm.myData.length);
          vm.table = true;
          vm.myValue = false;
       }, 
       function myError(response) { 
           vm.myData = response.statusText;
       });
      } 
  
}
