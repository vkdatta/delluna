export const name="edit-fill";
export const id="dl_79e22d2b04025f7a1795";
export const url=new URL("../icons/edit-fill.svg?v=c4b0bd1034189e8033539dd77c2082bd5e71756543e66a3916fb7768ddd80e1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
