###说明
这是一个简单实现静态服务的例子，里面有两个本人自己写模块 check-port 和 http-service，在创建前先检测端口是否关闭，然后在程序中指定对应的文件目录，实现web服务，目前只限于静态资源，包括css js html image。

####使用
正常的运行Nodejs程序的方法，本程序运行命令:node app
使用前先修改app.js文件，_port变量表示端口号，_fdir对应的文件目录（为本地目录）。



