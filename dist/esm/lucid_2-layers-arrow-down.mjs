export const name="lucid_2-layers-arrow-down";
export const id="dl_2a2dfba9d3164e9081c0";
export const url=new URL("../icons/lucid_2-layers-arrow-down.svg?v=38e2a2079f2d6f0fbd0c8b1e700605db15514136cdae6b42cf61d3489ef056ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
