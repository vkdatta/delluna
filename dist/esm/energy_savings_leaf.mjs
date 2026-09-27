export const name="energy_savings_leaf";
export const id="dl_efa156960a5001f539b9";
export const url=new URL("../icons/energy_savings_leaf.svg?v=18a716c0515e28c0da03780471802409678c475e3ebeef6407f0ae3390c1130c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
