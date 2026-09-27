export const name="not_listed_location-fill";
export const id="dl_d604803bb05d7951451f";
export const url=new URL("../icons/not_listed_location-fill.svg?v=961797daf26cf3224b6e7adc3a82c3cc3402c802d562c879012e0b2adb3ac5cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
