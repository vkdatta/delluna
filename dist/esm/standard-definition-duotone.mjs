export const name="standard-definition-duotone";
export const id="dl_c1336d30b2de55bf0cab";
export const url=new URL("../icons/standard-definition-duotone.svg?v=24d29b59440b2110df9a2c8f48023af579717d81fdbb84283a6be1f5cbd2a60b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
