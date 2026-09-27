export const name="storefront-light";
export const id="dl_aa332c2a8a4c086e40a0";
export const url=new URL("../icons/storefront-light.svg?v=8c1a2731f45d0d90547800ed3a0c1745e2cd69289c52aefffc53ab5da80f1d38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
