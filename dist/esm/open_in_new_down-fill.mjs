export const name="open_in_new_down-fill";
export const id="dl_24eb28e5e21fc2d6ed6b";
export const url=new URL("../icons/open_in_new_down-fill.svg?v=7b5efb2085d3db613de3be52b2419e810e4af075a1592f9fb5fbd637e4cc7cdf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
