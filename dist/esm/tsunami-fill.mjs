export const name="tsunami-fill";
export const id="dl_e7c8b8e225ca2885adce";
export const url=new URL("../icons/tsunami-fill.svg?v=c38a8575af595bd709406370a81ca2d7b1ac3d8986cb8832f0516c2607fafc90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
