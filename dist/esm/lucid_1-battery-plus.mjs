export const name="lucid_1-battery-plus";
export const id="dl_3becbeb0610441c4bf93";
export const url=new URL("../icons/lucid_1-battery-plus.svg?v=e356ec915754ac710962478ca372cc59a8a2d0a9d2cd1dd8dc08b363e88f0254",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
