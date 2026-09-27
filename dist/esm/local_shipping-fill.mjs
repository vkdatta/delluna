export const name="local_shipping-fill";
export const id="dl_32b6184b5cc43f8eef9f";
export const url=new URL("../icons/local_shipping-fill.svg?v=3d5583dae4ab18fc1b362adc149b5aa62611c7d523be094d930b731390de856e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
