export const name="lucid_2-list-filter-plus";
export const id="dl_e080cbea710741eb90cc";
export const url=new URL("../icons/lucid_2-list-filter-plus.svg?v=f53f9b62b505779a0f5b447292dcd6674d05633a5889219cd6335cc35083741d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
