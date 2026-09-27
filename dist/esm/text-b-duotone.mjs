export const name="text-b-duotone";
export const id="dl_45ded251454e061b7d37";
export const url=new URL("../icons/text-b-duotone.svg?v=f274774899e3d86e476bf5f1c060918609d5a5289131e5fc45c0fc4ba1ffce5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
