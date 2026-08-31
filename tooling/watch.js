const fs=require('fs'),path=require('path'),cp=require('child_process');
const root=path.resolve(__dirname,'..');
let timer=null;
function build(){cp.spawnSync(process.execPath,[path.join(__dirname,'build.js')],{stdio:'inherit'});}
build();
for(const dir of [path.join(root,'src/icons'),path.join(root,'runtime')])fs.watch(dir,{recursive:true},()=>{clearTimeout(timer);timer=setTimeout(build,120);});
console.log('Delluna watcher running.');
setInterval(()=>{},1<<30);
