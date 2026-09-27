export const name="inventory-fill";
export const id="dl_e2a66b9feac57caad5dc";
export const url=new URL("../icons/inventory-fill.svg?v=8f1b3ab43fae7e5e25af10c4afad4ac7f26589303fb5f88368853e0be9e1ac0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
