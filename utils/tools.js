const tools = {};

// 后退
tools.back = (step) => {
	uni.navigateBack({
		delta: step
	});
};

// 复制
tools.copy=(val)=>{
	let lang = uni.getStorageSync("language")
	uni.setClipboardData({
		data:val,
		success() {
			uni.showToast({
				title:lang=='Cn'?"复制成功":"Copy success",
				duration: 2000,
				icon: 'none'
			})
		}	
	})
}

//弹出消息
tools.toast=(val)=>{
	uni.showToast({
		title: val,
		icon: 'none',
		duration:2000
	})
}

//页面跳转
tools.jump=(path,value)=>{
	uni.navigateTo({
		url:path+'?value='+value
	})
}

//关闭当前页面，跳转到应用内的某个页面
tools.jumpTo=(path)=>{
	uni.redirectTo({
		url:path
	})
}

tools.loading=(value)=>{
	uni.showLoading({
		title: value,
		icon: "loading",
		mask: true
	})
}

tools.hideLoading=()=>{
	uni.hideLoading()
}

//将时间戳转化为固定格式
tools.formatTime = (value,type) => {
	var dataTime="";
    var data = new Date();
    data.setTime(value);
    var year   =  data.getFullYear();
    var month_temp=data.getMonth()+1;
    var month  =  month_temp<10?'0'+month_temp: month_temp;
    var day    =  data.getDate()<10?'0'+data.getDate(): data.getDate();
    var hour   =  data.getHours()<10?'0'+data.getHours(): data.getHours();
    var minute =  data.getMinutes()<10?'0'+data.getMinutes(): data.getMinutes();
    var second =  data.getSeconds()<10?'0'+data.getSeconds(): data.getSeconds();
    if(type == "YMD"){
        dataTime =  year + "-"+ month + "-" + day;
    }else if(type == "YMDHMS"){
        dataTime = year + "-"+month + "-" + day + " " +hour+ ":"+minute+":" +second;
    }else if(type == "HMS"){
        dataTime = hour+":" + minute+":" + second;
    }else if(type == "YM"){
        dataTime = year + "-" + month;
    }
    return dataTime;//将格式化后的字符串输出到前端显示
}

tools.formatTime2=(value)=>{
	var timeValue=value.replace(/-/g,"/");
	var T_pos = timeValue.indexOf('T');
	var year_month_day = timeValue.substr(0,T_pos);
	var hour_minute_second = timeValue.substr(T_pos+1,8);
	var new_datetime = year_month_day+" "+hour_minute_second;
	var dateee = new Date(new_datetime).toJSON();
	var sjc=new Date(dateee).getTime();
	var chinaT=sjc+8*3600*1000;
	var date=tools.formatTime(chinaT,'YMDHMS');
	return date;
},

// 将固定时间格式转换成时间戳
tools.formatTime3 = (value)=>{
	var data = new Date(value)
	var timestamp = data.getTime()
	return timestamp
}

// 获取时间戳
tools.formatTime4 = (type)=>{  //1为毫秒  2为秒
	var data = new Date()
	if(type==1){
		var timestamp = data.getTime()
	}
	if(type==2){
		var timestamp = data.getTime()/1000
	}
	return timestamp
}

//保留小数点
tools.number = (value,type) => {
    if(value==null || value==''){
        value=0;
    }
    //处理科学计数法
    value=value.toFixed(8);
    var arr=(value+"").split(".");
    var a1=arr[0];
    var a2=0;
    if(arr.length>1){
        a2=arr[1];
        if(a2.length>type){
            a2=a2.substring(0,type);
        }
    }
    value= Number(a1+"."+a2);
    return Number(value).toFixed(type)
}

tools.prePage = ()=>{
	let pages = getCurrentPages();
	let prePage = pages[pages.length - 2];
	// #ifdef H5
	return prePage;
	// #endif
	return prePage.$vm;
}

export default tools