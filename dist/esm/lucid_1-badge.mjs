export const name="lucid_1-badge";
export const id="dl_4ea1e38c26944360b566";
export const url=new URL("../icons/lucid_1-badge.svg?v=6e691c9083f4453a34496ef80ab2748570d19dda151be0723edca38c4083cf97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
