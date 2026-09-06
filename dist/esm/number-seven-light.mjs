export const name="number-seven-light";
export const id="dl_c5bec27b949446bd988f";
export const url=new URL("../icons/number-seven-light.svg?v=bfdc8ec2899d9eb3b2f318cf2ba2bf9efd74e6943638aae3b721f539df63f4c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
