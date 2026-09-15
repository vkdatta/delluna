export const name="cable_car";
export const id="dl_4c7c08b8dc714b528a5d";
export const url=new URL("../icons/C/cable_car.svg?v=d90f6aec59fd55c2f5e8fd01377a539e6ea8435ddaa232062e9512ed65744345",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
