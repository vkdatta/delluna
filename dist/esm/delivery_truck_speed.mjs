export const name="delivery_truck_speed";
export const id="dl_6692341de74e17a229e5";
export const url=new URL("../icons/delivery_truck_speed.svg?v=95c95022e8afa37a123031e35b519ac9696b7b5596ea5ad13a0eebe2810579df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
