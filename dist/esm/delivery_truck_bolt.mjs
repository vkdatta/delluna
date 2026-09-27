export const name="delivery_truck_bolt";
export const id="dl_0a97e799179cb2087ce7";
export const url=new URL("../icons/delivery_truck_bolt.svg?v=a05228254ff562672ed5af16aefdc74216aa759eef99757fbb86c3f39cd9f710",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
