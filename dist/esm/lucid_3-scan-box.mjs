export const name="lucid_3-scan-box";
export const id="dl_8d651e66c35c4cd18929";
export const url=new URL("../icons/lucid_3-scan-box.svg?v=30a74985ad656b643e93d2ec5e1953fe7e1428644a3a0b1145c1ec0aa04a3424",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
