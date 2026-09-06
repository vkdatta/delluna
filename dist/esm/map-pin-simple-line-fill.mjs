export const name="map-pin-simple-line-fill";
export const id="dl_5adbeec119754d919b5f";
export const url=new URL("../icons/map-pin-simple-line-fill.svg?v=fca4231357bae750a435afde81c25605cd11b5c03f64a6c69260441ed1b46ea5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
