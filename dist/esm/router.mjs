export const name="router";
export const id="dl_8de1f5c3c1cbd9655a2c";
export const url=new URL("../icons/router.svg?v=743ca5ef5d03d0628c3b34b798a684dd6971fa0be861e31a014d3135a165ddbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
