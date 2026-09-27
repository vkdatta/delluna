export const name="television";
export const id="dl_a426944868d16add1b72";
export const url=new URL("../icons/television.svg?v=47ac3dd6e21be3b2793d1c416f5ce52c902d85c1cf36f34287bcd95d176566cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
