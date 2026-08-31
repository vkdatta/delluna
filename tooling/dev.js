const fs=require('fs'),path=require('path'),cp=require('child_process');
const root=path.resolve(__dirname,'..'),pidFile=path.join(root,'.delluna-watch.pid');
if(fs.existsSync(pidFile)){const pid=Number(fs.readFileSync(pidFile,'utf8'));try{process.kill(pid,0);console.log(`Delluna watcher already running (${pid}).`);process.exit(0);}catch{fs.unlinkSync(pidFile);}}
const child=cp.spawn(process.execPath,[path.join(__dirname,'watch.js')],{cwd:root,detached:true,stdio:'ignore'});
fs.writeFileSync(pidFile,String(child.pid));child.unref();console.log(`Delluna watcher started in background (${child.pid}).`);
