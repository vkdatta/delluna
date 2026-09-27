export const name="lucid_3-scan-eye";
export const id="dl_6ba6f27ff8a245f0a9cd";
export const url=new URL("../icons/lucid_3-scan-eye.svg?v=2fc453035445bf6fa42d7e71a7b762da27023340a74f57fe16b4b326b2449068",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
