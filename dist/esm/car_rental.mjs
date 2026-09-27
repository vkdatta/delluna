export const name="car_rental";
export const id="dl_58a74944b7d9a5b51e45";
export const url=new URL("../icons/car_rental.svg?v=c1f10ba8a5b45a184964dfffce37569b5ee52c5213ab35cb5c6cfbb46e995261",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
