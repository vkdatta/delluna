export const name="lucid_1-arrow-down-narrow-wide";
export const id="dl_c4b7423a4dbb49be963e";
export const url=new URL("../icons/lucid_1-arrow-down-narrow-wide.svg?v=522bfe9fb5455256c6d5f95b6d4bfd3719ca891aa40663b7ec5c2228828ca3f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
