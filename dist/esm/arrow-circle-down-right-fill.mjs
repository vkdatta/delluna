export const name="arrow-circle-down-right-fill";
export const id="dl_9911aa438d444fb2bcbe";
export const url=new URL("../icons/arrow-circle-down-right-fill.svg?v=ad16a045e1a11103a6a2a8c4dac252d1e2fd69b24775466672f78dbcc8c8e469",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
