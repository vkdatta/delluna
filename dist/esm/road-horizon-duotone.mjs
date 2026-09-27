export const name="road-horizon-duotone";
export const id="dl_ab477c3d8ac8415e93ab";
export const url=new URL("../icons/road-horizon-duotone.svg?v=d15d61e0effee1bd3923d97783de505a8e20076d888f77df3c88cd28d2741932",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
