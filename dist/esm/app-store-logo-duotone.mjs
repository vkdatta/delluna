export const name="app-store-logo-duotone";
export const id="dl_b619e10840bc42228674";
export const url=new URL("../icons/app-store-logo-duotone.svg?v=8382200b852a50c94f555335c520fc081df02052449e8f3d38b72cb853012079",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
