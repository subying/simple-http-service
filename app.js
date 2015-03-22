var testPort = require('check-port')//测试端口方法 testPort(port,host,cb)
	,createHttp = require('http-service')
;
var _port = 88
	,_dir = '' //设置固定的文件夹路径
	,_fdir =  _dir ||  __dirname //获取当前文件夹路径
;
console.log(_fdir);
testPort(_port,'127.0.0.1',function(port,status){
	var msg = '';
	switch(status){
		case 'open':{
			msg = '该端口已打开！';
			break;
		}
		case 'timeout':
			msg = '连接超时！';
			break;
		case 'closed':{
			msg = '该端口已关闭！';
			break;
		}
		default:{
			msg = '连接超时！';
		}
	};
	if(status === 'closed'){
		createHttp(_port,_fdir,function(){
			console.log('创建成功！');
		});
	}else{
		console.log(msg);
	}
});
