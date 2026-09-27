export const name="shield-fill";
export const id="dl_3958cb2d7f4e89136538";
export const url=new URL("../icons/shield-fill.svg?v=54c3548dc3c6a8e30810a4e754ba3adf6985e7355c96a2b8d7477d42c75096c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
