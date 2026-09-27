export const name="udon-fill";
export const id="dl_9aca37d2dc533bc6ba67";
export const url=new URL("../icons/udon-fill.svg?v=1ac759f1cab5342ac13091e30ea1efbd4680f3bce5accb78189eccd888b11d0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
