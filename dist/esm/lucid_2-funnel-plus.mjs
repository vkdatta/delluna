export const name="lucid_2-funnel-plus";
export const id="dl_ef98dc96940a4de68a09";
export const url=new URL("../icons/lucid_2-funnel-plus.svg?v=890c6227f80d8ede7fd382e5a762da35761ae144402077974637f3800a89bf21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
