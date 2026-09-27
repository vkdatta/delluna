export const name="aspect_ratio-fill";
export const id="dl_2d845f9a7b34c3a00abb";
export const url=new URL("../icons/aspect_ratio-fill.svg?v=0f151a09605610a7cb2ff7a1265798466f827fbbc744351189307938c1f5fb23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
