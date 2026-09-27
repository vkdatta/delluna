export const name="explore_nearby-fill";
export const id="dl_f1934aa668ae91385d91";
export const url=new URL("../icons/explore_nearby-fill.svg?v=bd4e4db77de79be13d8ab1681553a11172d3cbfd84268172165102c30d60d173",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
