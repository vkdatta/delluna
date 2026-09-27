export const name="ramp_left-fill";
export const id="dl_3ef5b389cc77df04be7b";
export const url=new URL("../icons/ramp_left-fill.svg?v=a587dcb98780967550c8e938a1244f95816e832750528c5a852ed6f329961813",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
