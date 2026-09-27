export const name="lucid_3-map-pin-minus";
export const id="dl_1ba2a560f47e448f8bea";
export const url=new URL("../icons/lucid_3-map-pin-minus.svg?v=0ad97db6d02293b155ef5e990df26d9824e87ead47d0992b66b0162ff465dbab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
