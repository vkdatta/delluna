export const name="lucid_1-bone";
export const id="dl_0424b5e9416640ba9645";
export const url=new URL("../icons/lucid_1-bone.svg?v=864615e088f2192cce3600235f7836412c9d2d90ff1dd95aad856703b2515ef8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
