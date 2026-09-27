export const name="cloud-snow-fill";
export const id="dl_20d803e6e7834251b273";
export const url=new URL("../icons/cloud-snow-fill.svg?v=a6f965d2b2d2e9908d37337d61358c002ad91bbddb61504fa2b0e8766e38e9ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
