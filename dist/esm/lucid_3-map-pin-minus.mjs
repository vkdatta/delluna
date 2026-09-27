export const name="lucid_3-map-pin-minus";
export const id="dl_1ba2a560f47e448f8bea";
export const url=new URL("../icons/lucid_3-map-pin-minus.svg?v=0b84a4d80076620fd39e50dc524853547b3535d87fad5041ecfbcff9a53c6e6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
