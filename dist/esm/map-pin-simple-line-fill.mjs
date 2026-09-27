export const name="map-pin-simple-line-fill";
export const id="dl_5adbeec119754d919b5f";
export const url=new URL("../icons/map-pin-simple-line-fill.svg?v=77ce76539124dec7fc9f6f705e1d5e7b1e3623714017a5206ac4071945fbd6b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
