export const name="battery_android_bolt-fill";
export const id="dl_6c2d05b23fc661759e5b";
export const url=new URL("../icons/battery_android_bolt-fill.svg?v=f3ab3b72c796c6715371e989d559b2706d2531efa4457f2b79ee07d0aaf052c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
