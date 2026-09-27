export const name="sneaker-move-light";
export const id="dl_8f799851700ae0646e5d";
export const url=new URL("../icons/sneaker-move-light.svg?v=f2237740eb442ab4d3b13a1a1a5cb2b30d44f8130b488dd678771f109a6585ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
