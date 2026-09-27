export const name="lucid_3-map-pin-minus-inside";
export const id="dl_f9b9c1c0cefc429d8f39";
export const url=new URL("../icons/lucid_3-map-pin-minus-inside.svg?v=00e0958c08bee5a94dd2e4a4d50e84b964ef9f894ce851ac0520d344525f185a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
