const fs=require('fs'),path=require('path');
const file=path.resolve(__dirname,'..','.delluna-watch.pid');
if(!fs.existsSync(file)){console.log('Delluna watcher is not running.');process.exit(0)}
const pid=Number(fs.readFileSync(file,'utf8'));try{process.kill(pid,'SIGTERM');console.log(`Stopped Delluna watcher (${pid}).`);}catch{console.log('Delluna watcher was already stopped.')}try{fs.unlinkSync(file)}catch{}
