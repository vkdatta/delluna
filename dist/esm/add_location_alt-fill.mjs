export const name="add_location_alt-fill";
export const id="dl_643f9ca1b1bf0519b42a";
export const url=new URL("../icons/add_location_alt-fill.svg?v=ecde420cd65add20da9eb047cf417a169efb6d3b6d77270ef82a6eb3926f853f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
