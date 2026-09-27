export const name="cell-signal-none-duotone";
export const id="dl_1626fd0483364d1fb374";
export const url=new URL("../icons/cell-signal-none-duotone.svg?v=c351869e961f687dfba5f8277922d8e3143210117722f3d7beafb54533fea098",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
