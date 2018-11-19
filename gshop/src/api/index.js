//包含n个接口请求的模块

// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
// [2、获取食品分类列表](#2获取食品分类列表)<br/>
// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>


//函数返回值是promise函数

import ajax from './ajax';
const BASE = '/api';
//需要使用代理时加上

// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
export const reqAddress = (longitude,latitude) => ajax(BASE+`/position/${latitude},${longitude}`);
// [2、获取食品分类列表](#2获取食品分类列表)<br/>
export const reqFoodCategorys = ()=> ajax(BASE+'/index_category');
// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
export const reqShops = ({latitude,longitude}) => ajax(BASE+'/shops',{latitude,longitude});
//                       两个可以选择两个参数或者对象  三个或者以上最好用对象
