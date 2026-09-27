export const name="globe-simple-light";
export const id="dl_24ce6152a5a24ee7b313";
export const url=new URL("../icons/globe-simple-light.svg?v=7dac5e5f48a99bd1edf0a77acde247344a59207d3d37459f5ff13d03b1266960",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
