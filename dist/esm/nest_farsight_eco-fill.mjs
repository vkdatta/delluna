export const name="nest_farsight_eco-fill";
export const id="dl_e4e304b9f95de52ce68b";
export const url=new URL("../icons/nest_farsight_eco-fill.svg?v=f5319aaae7cd84c2ea15106d0b8023b5839bce06fb1631d2169bff9f9e3f85ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
