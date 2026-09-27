export const name="odt-fill";
export const id="dl_2d11c94dda2b2a7c61db";
export const url=new URL("../icons/odt-fill.svg?v=a9705dbb9b45f24ad2c3406a5b17c7a1a2de7c6f322b66943c6b21d014ce93d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
