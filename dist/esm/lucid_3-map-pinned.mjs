export const name="lucid_3-map-pinned";
export const id="dl_6df0129632644f6497b3";
export const url=new URL("../icons/lucid_3-map-pinned.svg?v=f6d2f598deb5701428e423859d0e940eae543b9737ae6c09cdcc7a1ee5f44ef1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
