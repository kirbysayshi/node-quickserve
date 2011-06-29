#!/usr/bin/env node
// command line args:
// [0]
// [1]
// [2] server root
// [3] port to listen on

var  fs = require('fs')
	,root = fs.realpathSync(process.argv[2] || '.')
	,port = process.argv[3] || 1234
	,connect = require('connect')
	,serv = connect.createServer(
		 connect.favicon()
		,connect.logger()
		,connect.static(root)
		,connect.directory(root)
	);

serv.listen(port, function(){
	console.log('serving ' + root + ' at: http://localhost:' + port);
});

