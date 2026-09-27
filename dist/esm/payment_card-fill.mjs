export const name="payment_card-fill";
export const id="dl_3c3d74da496b451caf8a";
export const url=new URL("../icons/payment_card-fill.svg?v=e23ad7985d83176266b41669af97079cc04eee41d0d2d7e20af52b247eefd298",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
