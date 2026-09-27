export const name="face-mask-light";
export const id="dl_7e0b2faff77a42799f01";
export const url=new URL("../icons/face-mask-light.svg?v=75dd150b8c97cdc08c4525c6c43443dbf201ee45172ee553156ffc7ac509f1b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
