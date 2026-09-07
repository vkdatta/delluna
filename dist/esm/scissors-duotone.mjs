export const name="scissors-duotone";
export const id="dl_d8af3fb8e7504250bdc5";
export const url=new URL("../icons/S/scissors-duotone.svg?v=a1d6e1a9d9e9513d1791e83d09fe460fb48736d5f30aa5190fb26d6439114d77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
