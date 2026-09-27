export const name="caret-circle-left-duotone";
export const id="dl_07c6b11237c64303b626";
export const url=new URL("../icons/caret-circle-left-duotone.svg?v=682db70695d90a9136ce0c3de72878f4fa19fd7bb74ef4682f601e045e1c37ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
