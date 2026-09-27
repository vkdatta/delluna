export const name="3d-fill";
export const id="dl_cba64f47a17b68b3cbfa";
export const url=new URL("../icons/3d-fill.svg?v=b539091bda4fb53f6c22b30228c0f88b7ae842f6a23743696cbbcfe411567b7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
