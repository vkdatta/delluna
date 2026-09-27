export const name="directions_alt_off-fill";
export const id="dl_e188dd17a7802a86f504";
export const url=new URL("../icons/directions_alt_off-fill.svg?v=be2a7c2451293dd5169e360296966f4661b85c5724cc77a93e31d0502c2c305e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
