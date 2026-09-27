export const name="lucid_3-square-centerline-dashed-vertical";
export const id="dl_eece36c07d2048a0a62e";
export const url=new URL("../icons/lucid_3-square-centerline-dashed-vertical.svg?v=c6af3127f3fb45ad0886049e3711b7c9f0b13596adfc02edd0bc70080d533932",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
