export const name="nest_farsight_heat";
export const id="dl_71bfe4554fec9983b22b";
export const url=new URL("../icons/nest_farsight_heat.svg?v=0ed7411c03263e0da1d5363bb1f7e3516f3362430627e65446c107431bc068c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
