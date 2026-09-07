export const name="finn-the-human-duotone";
export const id="dl_ffaaafdf707c466fbb37";
export const url=new URL("../icons/finn-the-human-duotone.svg?v=2d47b1f1b20fe09226b32440636f0fa4dc0e4fac04232ab7b0fd6d399ed1b721",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
