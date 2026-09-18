export const name="electric_scooter";
export const id="dl_2a3074bd56ee4f4dbad4";
export const url=new URL("../icons/electric_scooter.svg?v=0a82ad97ae6ec904b352c1be2a85f07afffaa596689e2c49e97dd5d38ec51e65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
