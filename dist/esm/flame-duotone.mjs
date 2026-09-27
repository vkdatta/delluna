export const name="flame-duotone";
export const id="dl_ae1af819e70b4bf7bc2e";
export const url=new URL("../icons/flame-duotone.svg?v=373e184f0f2fea6adcfbd81f14a77fcbc972d84429a0631a9bdc2541ae4d5784",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
