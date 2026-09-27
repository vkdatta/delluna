export const name="trolley_cable_car";
export const id="dl_b9b0c505450e6135e496";
export const url=new URL("../icons/trolley_cable_car.svg?v=5e6776987d44a6f4113410dcf4c40ca0764ae4f219289c7e6a2008ab6a5f4b82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
