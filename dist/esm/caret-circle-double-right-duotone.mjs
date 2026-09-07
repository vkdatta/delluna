export const name="caret-circle-double-right-duotone";
export const id="dl_1ad617691153480ebd5a";
export const url=new URL("../icons/caret-circle-double-right-duotone.svg?v=f0a0bf46e62a6234ea894ab30c129957346d51e6e8db9b7652564d8513da4d5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
