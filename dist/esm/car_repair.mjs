export const name="car_repair";
export const id="dl_57a82cf99dc1cb3af6d1";
export const url=new URL("../icons/car_repair.svg?v=cd655902f47746f280ce446bea5496a38dc53bc47397efd5948cf0681588fa3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
