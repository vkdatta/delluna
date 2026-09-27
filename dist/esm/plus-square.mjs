export const name="plus-square";
export const id="dl_a6c7206f61bf42d08a2f";
export const url=new URL("../icons/plus-square.svg?v=68d5157cca8f0acc1539cc05430fa2ba0ea965039bb6be07061105c40b250174",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
