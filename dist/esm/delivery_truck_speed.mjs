export const name="delivery_truck_speed";
export const id="dl_c8fb46b696efedbdd0cf";
export const url=new URL("../icons/delivery_truck_speed.svg?v=7a51c70d5849de4aa8853899b1f6bb61d17e5e224fba88f0ec3705da218460b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
