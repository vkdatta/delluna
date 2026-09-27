export const name="shipping-container-fill";
export const id="dl_f0b579f9f5fc57557425";
export const url=new URL("../icons/shipping-container-fill.svg?v=2e92c69fdd1b4723b7884c4a351926942e5a9bae546cfcc21b68fb46d5c1e1b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
