export const name="trip-fill";
export const id="dl_f58a7ca3fb36c922c228";
export const url=new URL("../icons/trip-fill.svg?v=c683b2a455afdd610518efd61bce395154ea9658742358d79f4479d87add7c7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
