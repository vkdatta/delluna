export const name="star-half-light";
export const id="dl_fb6542dec4444a541560";
export const url=new URL("../icons/star-half-light.svg?v=421e30d52645a3b6c4f491e5389bad24342d3e145c52695f1b9a6da633e7b001",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
