export const name="box-frame-plus";
export const id="dl_cafe6b68b09039a8ae0b";
export const url=new URL("../icons/box-frame-plus.svg?v=fab0bd58eb13c82cf02fc650eadd62ea95e7a7548076d130cff2c01730bfa64b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
