export const name="paypal-logo-fill";
export const id="dl_2c158a0212574940b04d";
export const url=new URL("../icons/paypal-logo-fill.svg?v=a6f8ea4099b08c3ab5b3056548f466fbc497db4f130fd45c688ea480740fd063",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
