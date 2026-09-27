export const name="thermometer-simple-light";
export const id="dl_c0d9e2b9076b607c23f2";
export const url=new URL("../icons/thermometer-simple-light.svg?v=c9819f56b32599535ffc5b0dd9064f7d0fcc394b558d133d77871952c398c505",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
