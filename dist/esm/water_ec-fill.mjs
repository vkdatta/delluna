export const name="water_ec-fill";
export const id="dl_b2d538c493c6388831ac";
export const url=new URL("../icons/water_ec-fill.svg?v=48478b817d9f9d292c202c1a32aa611507aef72567de568cbe7ea8b216a1b43f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
