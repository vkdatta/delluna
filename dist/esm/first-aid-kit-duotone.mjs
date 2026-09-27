export const name="first-aid-kit-duotone";
export const id="dl_b4bb01afadbd468f8995";
export const url=new URL("../icons/first-aid-kit-duotone.svg?v=773e0f4618222fc4e181d9578f39c3bc152d3d8e273f68a9f438a05157495469",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
