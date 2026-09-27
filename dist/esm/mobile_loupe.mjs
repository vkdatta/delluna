export const name="mobile_loupe";
export const id="dl_50600ab1cf076a12280f";
export const url=new URL("../icons/mobile_loupe.svg?v=d524e23c9a3bf0fc13871412a632fba79931760b82190ad84fdd1e974413660c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
