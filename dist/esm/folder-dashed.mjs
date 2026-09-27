export const name="folder-dashed";
export const id="dl_587e529242864693b01a";
export const url=new URL("../icons/folder-dashed.svg?v=d12f8d35090c99150945a454df3af91bae49361cc89525e1e44183025b4f4f2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
