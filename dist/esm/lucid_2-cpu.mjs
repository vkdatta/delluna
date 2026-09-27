export const name="lucid_2-cpu";
export const id="dl_07aa3b21f382499db359";
export const url=new URL("../icons/lucid_2-cpu.svg?v=6d60cf015bc98a6aab633f67c790fced1377b45bf3bcf435a82b8229d7f2798a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
