export const name="data_usage-fill";
export const id="dl_8674c3cd6c1901a13a0a";
export const url=new URL("../icons/data_usage-fill.svg?v=027f71d6e2944e0d10eadf6b0c7850d33fb4e749649b8bc45155077e8a9e7fa7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
