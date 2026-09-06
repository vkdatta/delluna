export const name="bone-duotone";
export const id="dl_77b2ecfc7e494f7d94c3";
export const url=new URL("../icons/bone-duotone.svg?v=a64673548d42419ff4c1ddc9ace4f81807b534762d0272a3153192ba5dc45146",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
