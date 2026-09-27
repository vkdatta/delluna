export const name="location_away-fill";
export const id="dl_5a0fc7c15ce52dc4ca7a";
export const url=new URL("../icons/location_away-fill.svg?v=814e303249dd84be8de8ee93c18553e38a0162720056d4e9c9bc567a12985635",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
