export const name="delivery_truck_bolt-fill";
export const id="dl_fa05b4a12ab34e0f9577";
export const url=new URL("../icons/delivery_truck_bolt-fill.svg?v=38cfde653d0670b03d364fc2271e10a035f9ca5e936803ba21362fc67caa63cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
