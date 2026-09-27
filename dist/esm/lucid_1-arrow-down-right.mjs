export const name="lucid_1-arrow-down-right";
export const id="dl_c2976220519144b8a711";
export const url=new URL("../icons/lucid_1-arrow-down-right.svg?v=2ccfdb1518010849558da3772a53e7d6846250f297b521dc3acca989b37473f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
