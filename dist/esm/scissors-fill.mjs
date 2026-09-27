export const name="scissors-fill";
export const id="dl_1798701924deb58834c5";
export const url=new URL("../icons/scissors-fill.svg?v=ad4b31ec372a683ba4d80bad96b7915347156b758fac6756e578f19a36f8eee3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
