export const name="circuitry-duotone";
export const id="dl_4cb49a444b4a47c7972e";
export const url=new URL("../icons/circuitry-duotone.svg?v=99b850d34e43aa836048e4816cd0e48b8def7f03780ad5cc5b8e00cdf069a41f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
