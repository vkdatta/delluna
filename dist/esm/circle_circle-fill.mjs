export const name="circle_circle-fill";
export const id="dl_e72facb0f0200248d451";
export const url=new URL("../icons/circle_circle-fill.svg?v=bcad60943a9f0fe324ac6bf7b34fe92985aa7c90bd5470c526141ad795145f3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
