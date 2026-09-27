export const name="lucid_3-pentagon";
export const id="dl_904616fe50cd4e3c8da2";
export const url=new URL("../icons/lucid_3-pentagon.svg?v=99ba0fb04860c01f4dbee61b18ea5c87c95cdd827266c3f892eb2b1a0e662dc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
