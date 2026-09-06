export const name="lucid_1-baby";
export const id="dl_543cc6346d534ec4a129";
export const url=new URL("../icons/lucid_1-baby.svg?v=e939232b6e9fa37eeb7d73b5db0c520dc0535fdb82bb23c4d1ee993234943c8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
