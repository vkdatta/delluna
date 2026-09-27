export const name="credit_card_clock";
export const id="dl_a6742e8ee0d5ec9fb3e3";
export const url=new URL("../icons/credit_card_clock.svg?v=f8564f2fe3ac5d57837f32e37aa3cc6393120a832c4f3bb41234d91c011cbb02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
