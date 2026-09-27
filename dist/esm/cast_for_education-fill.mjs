export const name="cast_for_education-fill";
export const id="dl_0b0fec773eaaccccf910";
export const url=new URL("../icons/cast_for_education-fill.svg?v=a50b4bdaa63b49c243259cb50e5d3b01f6c7e73a3369d39602cc097510a2f0e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
