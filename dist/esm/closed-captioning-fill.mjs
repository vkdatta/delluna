export const name="closed-captioning-fill";
export const id="dl_dbd22d3475e64a08bf4b";
export const url=new URL("../icons/closed-captioning-fill.svg?v=81ca9cd30e420f5582297acd603a11674584400ad9ab67bec64b62094a9ca169",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
