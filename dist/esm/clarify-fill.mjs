export const name="clarify-fill";
export const id="dl_8b843365c76b48d8b7ed";
export const url=new URL("../icons/clarify-fill.svg?v=d2d66e51d4dd6770d61051a0424c50269ad500eb5f60a3eb1679f78a4ec9bb47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
