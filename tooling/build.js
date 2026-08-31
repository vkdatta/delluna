const fs=require('fs');
const path=require('path');
const crypto=require('crypto');
const root=path.resolve(__dirname,'..');
const src=path.join(root,'src/icons');
const dist=path.join(root,'dist');
const regDir=path.join(root,'registry');
const regPath=path.join(regDir,'icons.json');
const old=fs.existsSync(regPath)?JSON.parse(fs.readFileSync(regPath,'utf8')):{icons:{},aliases:{}};
const variants=old.variants||['og','hud','orbit','circuit','plasma'];
const aliases=old.aliases||{close:'x',closeDpad:'x',add:'plus',select_all:'selectAll',delete:'trash',cut:'content_cut',content_copy:'copy',content_paste:'paste',swap:'swap_horiz'};
const oldIcons=Object.values(old.icons||{}).filter(x=>!x.aliasOf);
const byPath=new Map(oldIcons.map(x=>[String(x.file||'').replace(/^icons\//,''),x]));
const byHash=new Map(oldIcons.filter(x=>x.hash).map(x=>[x.hash,x]));
const byId=new Map(oldIcons.filter(x=>x.id).map(x=>[x.id,x]));
function walk(dir){if(!fs.existsSync(dir))return[];return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>{const p=path.join(dir,e.name);return e.isDirectory()?walk(p):e.name.toLowerCase().endsWith('.svg')?[p]:[]}).sort((a,b)=>a.localeCompare(b));}
function clean(s){return s.replace(/<!--[\s\S]*?-->/g,'').replace(/\sdata-delluna-id="[^"]*"/gi,'').replace(/\r?\n/g,' ').replace(/>\s+</g,'><').replace(/\s+/g,' ').trim()}
function hash(s){return crypto.createHash('sha256').update(s).digest('hex')}
function genId(){return 'dl_'+crypto.randomBytes(10).toString('hex')}
function title(n){return n.replace(/[_-]+/g,' ').replace(/([a-z])([A-Z])/g,'$1 $2').replace(/\b\w/g,c=>c.toUpperCase())}
function tags(n){return [...new Set(n.toLowerCase().split(/[_-]+/).filter(Boolean))]}
fs.mkdirSync(dist,{recursive:true});fs.mkdirSync(regDir,{recursive:true});
const registry={version:4,library:'Delluna',variants,generatedAt:new Date().toISOString(),icons:{},aliases};
const usedIds=new Set();const seenNames=new Map();const seenIds=new Map();const files=walk(src);const duplicates=[];
for(const file of files){const rel=path.relative(src,file).replaceAll(path.sep,'/');const raw=fs.readFileSync(file,'utf8');if(!/<svg[\s>]/i.test(raw))throw new Error(`Invalid SVG: ${rel}`);const cleanSvg=clean(raw),h=hash(cleanSvg),embedded=raw.match(/data-delluna-id=["']([^"']+)["']/i)?.[1];let meta=embedded?byId.get(embedded):null;meta=meta||byPath.get(rel)||byHash.get(h);const id=meta?.id||genId();const name=meta?.name||path.basename(rel,'.svg');if(usedIds.has(id)||seenIds.has(id))throw new Error(`Duplicate Delluna ID ${id}: ${seenIds.get(id)||rel}`);usedIds.add(id);seenIds.set(id,rel);if(seenNames.has(name))throw new Error(`Duplicate icon name "${name}" in ${seenNames.get(name)} and ${rel}. Rename one icon in the Admin Portal or registry before building.`);seenNames.set(name,rel);const oldSame=byHash.get(h);if(oldSame&&oldSame.id!==id)duplicates.push({path:rel,duplicateOf:oldSame.path,id});registry.icons[name]={id,name,title:meta?.title||title(name),file:`icons/${rel}`,path:rel,tags:meta?.tags||tags(name),categories:meta?.categories||['general'],aliases:meta?.aliases||[],hash:h,updatedAt:new Date().toISOString()};}
for(const [alias,target] of Object.entries(aliases)){if(!registry.icons[alias]&&registry.icons[target])registry.icons[alias]={name:alias,title:title(alias),aliasOf:target,tags:[alias,target],categories:['alias']}}
fs.rmSync(dist,{recursive:true,force:true});fs.mkdirSync(path.join(dist,'icons'),{recursive:true});fs.mkdirSync(path.join(dist,'esm'),{recursive:true});
for(const file of files){const rel=path.relative(src,file).replaceAll(path.sep,'/');const name=path.basename(rel,'.svg');const raw=fs.readFileSync(file,'utf8');const embedded=raw.match(/data-delluna-id=["']([^"']+)["']/i)?.[1];const item=embedded?Object.values(registry.icons).find(x=>x.id===embedded):registry.icons[name]||Object.values(registry.icons).find(x=>x.path===rel);if(!item)throw new Error(`Registry item missing for ${rel}`);const out=path.join(dist,'icons',rel);fs.mkdirSync(path.dirname(out),{recursive:true});const withId=/data-delluna-id=/i.test(raw)?raw:raw.replace(/<svg(\s|>)/i,`<svg data-delluna-id="${item.id}"$1`);if(!/data-delluna-id=/i.test(raw))fs.writeFileSync(file,withId);fs.writeFileSync(out,withId);fs.writeFileSync(path.join(dist,'esm',rel.replace(/\.svg$/i,'.js')),`export const name=${JSON.stringify(item.name)};\nexport const id=${JSON.stringify(item.id)};\nexport const url=new URL('../icons/${rel}',import.meta.url).href;\nexport async function svg(){return fetch(url).then(r=>r.text())}\n`)}
fs.writeFileSync(regPath,JSON.stringify(registry,null,2)+'\n');fs.writeFileSync(path.join(root,'registry.json'),JSON.stringify(registry,null,2)+'\n');fs.writeFileSync(path.join(dist,'registry.json'),JSON.stringify(registry,null,2)+'\n');fs.writeFileSync(path.join(dist,'duplicates.json'),JSON.stringify({duplicates},null,2)+'\n');fs.copyFileSync(path.join(root,'runtime','delluna.js'),path.join(dist,'delluna.js'));
let full=fs.readFileSync(path.join(root,'runtime','delluna-full.js'),'utf8');
const fullMap={};
for(const file of files){const rel=path.relative(src,file).replaceAll(path.sep,'/');const name=registry.icons[Object.keys(registry.icons).find(k=>registry.icons[k].path===rel)]?.name||path.basename(rel,'.svg');fullMap[name]=clean(fs.readFileSync(file,'utf8')).replace(/\sdata-delluna-id="[^"]*"/gi,'')}
full=full.replace(/var ICONS_RAW = \{[\s\S]*?\};\n\n  \/\/ Same concept/,`var ICONS_RAW = ${JSON.stringify(fullMap)};\n\n  // Same concept`);
fs.writeFileSync(path.join(dist,'delluna-full.js'),full);
fs.copyFileSync(path.join(root,'runtime','delluna.css'),path.join(dist,'delluna.css'));fs.writeFileSync(path.join(dist,'_headers'),'/*\n  Access-Control-Allow-Origin: *\n  Access-Control-Allow-Methods: GET, HEAD, OPTIONS\n  Access-Control-Allow-Headers: *\n  Cache-Control: public, max-age=31536000, immutable\n\n/registry.json\n  Cache-Control: public, max-age=60, must-revalidate\n');
if(process.argv.includes('--check')){if(duplicates.length)console.warn(`Exact duplicate artwork: ${duplicates.length}`);else console.log('No exact duplicate artwork.');}
console.log(`Delluna V4: ${files.length} source icons, ${duplicates.length} exact duplicate artwork matches.`);
