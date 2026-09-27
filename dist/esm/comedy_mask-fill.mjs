export const name="comedy_mask-fill";
export const id="dl_e0ec87adc6b6bedb2b6f";
export const url=new URL("../icons/comedy_mask-fill.svg?v=6efcd83aebe62382bdcb5b64be45509f7321f4f4522bb003cd21a3af173d8525",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
