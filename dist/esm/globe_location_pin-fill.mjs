export const name="globe_location_pin-fill";
export const id="dl_4bdc2d140ac24f188cc2";
export const url=new URL("../icons/G/globe_location_pin-fill.svg?v=0028ea05e306f2234f173d3fff97b4229690280b070c58b50ed1ae49ada09ff3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
