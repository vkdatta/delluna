export const name="rainy_snow-fill";
export const id="dl_df5939e6d15a518812d4";
export const url=new URL("../icons/rainy_snow-fill.svg?v=c2a62ad73fbc4bd5e210d8ff1371a3b7e2a5956d07037bad63967b73599811ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
