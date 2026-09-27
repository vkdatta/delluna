export const name="oven-fill";
export const id="dl_001353dba91b48ef90a1";
export const url=new URL("../icons/oven-fill.svg?v=cc7f22b472ab7ab0b840328767097c25bd73f38e32dc9f92a4146a2a2533572c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
