export const name="trash-simple-duotone";
export const id="dl_1ff28079bb7fe4d4000b";
export const url=new URL("../icons/trash-simple-duotone.svg?v=4d25c1db8258fbdae15f8dc3fac1ce7e0a49bd020cea75133a9ef40131c70614",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
