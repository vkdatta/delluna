export const name="album-fill";
export const id="dl_8d73035cc8bc7191c89c";
export const url=new URL("../icons/album-fill.svg?v=50bf6d59a47810f2bace43ce900dbdce28124e06210444dd8024b8708630c59f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
