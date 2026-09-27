export const name="music-notes-bold";
export const id="dl_2aa5b843ccff4f7db1a2";
export const url=new URL("../icons/music-notes-bold.svg?v=e702ea6f5b8a483274a75094b48f8256d37787945789b6d228fe29465038a5ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
