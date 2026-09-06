export const name="lucid_3-save";
export const id="dl_5dc324380cf24942bd7f";
export const url=new URL("../icons/lucid_3-save.svg?v=233964cf774eca7d164bb435cf22b3e2647d961819e7550f8cb862c813f0ce5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
