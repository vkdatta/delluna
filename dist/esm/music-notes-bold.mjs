export const name="music-notes-bold";
export const id="dl_2aa5b843ccff4f7db1a2";
export const url=new URL("../icons/music-notes-bold.svg?v=1669138ed6ef9c7107ed74904e3a7cee0e1214bfdbb073cf93d50306e87815d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
