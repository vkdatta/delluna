export const name="lucid_3-pentagon";
export const id="dl_904616fe50cd4e3c8da2";
export const url=new URL("../icons/lucid_3-pentagon.svg?v=ff08d5d75cbc8bddd66a1731c5f0170164e4dcac11a74b4abb072b576e83459d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
