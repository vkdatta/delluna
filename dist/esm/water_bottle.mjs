export const name="water_bottle";
export const id="dl_22f8c6c1f9259ab9c17b";
export const url=new URL("../icons/water_bottle.svg?v=c30e43375725b007b5946938ef8171e755893fe80c1ef6b9f3898ca401d4d928",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
