export const name="lucid_1-atom";
export const id="dl_0562759199084659ad49";
export const url=new URL("../icons/lucid_1-atom.svg?v=3f01cf3a26b51e79f3eebec146552f338f43d8231772d2e9c05db1f7b088d012",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
