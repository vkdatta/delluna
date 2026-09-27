export const name="outdoor_garden-fill";
export const id="dl_0106d2dcaf3b7804216c";
export const url=new URL("../icons/outdoor_garden-fill.svg?v=d8aadec1bbc9c4928e9cdce5145479e3e4ef803fc0ecfd393a839be359c2718e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
