export const name="vault-fill";
export const id="dl_88d8835d1093a9b1b338";
export const url=new URL("../icons/vault-fill.svg?v=26fa4ec0472ede1ae54276e19cb1b2c45ac497ad96e8c3f32782958732ade78f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
