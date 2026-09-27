export const name="electric_meter-fill";
export const id="dl_3d27e37c3469b830dbf3";
export const url=new URL("../icons/electric_meter-fill.svg?v=2e6cac6e0c3b30572530408088fe5e2a41455b425819a3e78056cf8d62e0bee2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
