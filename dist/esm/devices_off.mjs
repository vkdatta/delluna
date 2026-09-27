export const name="devices_off";
export const id="dl_dc3480870e06f484a56f";
export const url=new URL("../icons/devices_off.svg?v=3988294639a0aafb88db5dea3f96b32156ace666f79430a5f714f0de43a5de88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
