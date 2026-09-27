export const name="important_devices-fill";
export const id="dl_464261afe3c0b53c38ed";
export const url=new URL("../icons/important_devices-fill.svg?v=e0964f2ff5192602ef9da2301467324d7ed097f2798862396c8dc21716f659ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
