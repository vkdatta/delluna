export const name="lucid_2-file-heart";
export const id="dl_cf9fca5bcbed4b85a798";
export const url=new URL("../icons/lucid_2-file-heart.svg?v=75d145436be12007829745e7e478b3812dbce3a34017d985c712615d57c141cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
