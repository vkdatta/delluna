export const name="download_done-fill";
export const id="dl_d9a2e4bcb8c0a3997dde";
export const url=new URL("../icons/download_done-fill.svg?v=d72e841805ebbbe2d5cd3ceb5278fd4c35de41ccc6da4191a81f6cdaf8b7ecda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
