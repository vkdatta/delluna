export const name="delivery_truck_speed";
export const id="dl_acc73ff14e75db467fb1";
export const url=new URL("../icons/delivery_truck_speed.svg?v=d1134f9f620efa72a9a0da6245fee159df4615825d01db99c02e594836225224",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
