export const name="ev_shadow_minus";
export const id="dl_e05352e8203894bbfd61";
export const url=new URL("../icons/ev_shadow_minus.svg?v=e3e867d807b46b3326b032dfb8bae10db3666e6c072f4ed26a88510c447dcb88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
