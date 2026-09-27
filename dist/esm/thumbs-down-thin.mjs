export const name="thumbs-down-thin";
export const id="dl_63dc86d4ed55b41bdef5";
export const url=new URL("../icons/thumbs-down-thin.svg?v=0edbfc9ae6819b2727534147aa0ecc441575f6f724c855f6c048bff5d4edce5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
