export const name="spinner-light";
export const id="dl_bc10530957184943995b";
export const url=new URL("../icons/S/spinner-light.svg?v=5badddb2347cf3e5252b2c5da129b55c2281cf13531649adffaae665039105d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
