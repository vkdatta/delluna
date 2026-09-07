export const name="medal-military-fill";
export const id="dl_e6c2fb5018cd4ed9bf7f";
export const url=new URL("../icons/medal-military-fill.svg?v=75b1d70cd60662300719fe62d873f4221105adcb29d1ca5df16042f250d8296d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
