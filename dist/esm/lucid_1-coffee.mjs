export const name="lucid_1-coffee";
export const id="dl_60f61d3dd6d049908cfc";
export const url=new URL("../icons/lucid_1-coffee.svg?v=9cae51bfe48148a1438303dcb8be4c3e932705588c12ed3024885c815f201db0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
