export const name="counter_4-fill";
export const id="dl_ece7c5e144a03a891b63";
export const url=new URL("../icons/counter_4-fill.svg?v=7cb7a9d5baf0aa44ed08d5735963fabf88c3e88f4c84324f97f972920cafdf8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
