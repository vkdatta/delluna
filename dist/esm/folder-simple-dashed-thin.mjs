export const name="folder-simple-dashed-thin";
export const id="dl_fbccedaa3092412fae67";
export const url=new URL("../icons/folder-simple-dashed-thin.svg?v=99057f20877bc132756ce2583a3c0809556bf443b855f010fc2ef39f5e83842c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
