export const name="lucid_3-roller-coaster";
export const id="dl_5295c19238154c1e9822";
export const url=new URL("../icons/lucid_3-roller-coaster.svg?v=a8014aaa0dba1a11aa02cc27b7da302eaa19443e60de53c125b2b3ac24773638",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
