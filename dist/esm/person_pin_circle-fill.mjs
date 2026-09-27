export const name="person_pin_circle-fill";
export const id="dl_e879d23f2cd3073dd32f";
export const url=new URL("../icons/person_pin_circle-fill.svg?v=c5420d3a3530eabb7f5150fe6011f321dfc03d33b10c753441e4412df2019146",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
