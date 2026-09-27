export const name="pen_size_3-fill";
export const id="dl_48fbdfa99c7c374a8376";
export const url=new URL("../icons/pen_size_3-fill.svg?v=d1f40f5ee6c563f903a3f2d6a05d7e1a9efb89af5d237a6d55ac94b4b1052080",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
