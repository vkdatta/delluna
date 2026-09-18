export const name="counter_8-fill";
export const id="dl_2507556a38a64e99ba39";
export const url=new URL("../icons/counter_8-fill.svg?v=6923f276f89761e2a0ce8f2f265e79d1f0f508c41d5e578f7ac18e1f0ab5f4ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
