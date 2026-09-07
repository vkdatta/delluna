export const name="thermometer-simple-light";
export const id="dl_b5682fc2d1c343f2b268";
export const url=new URL("../icons/T/thermometer-simple-light.svg?v=c9819f56b32599535ffc5b0dd9064f7d0fcc394b558d133d77871952c398c505",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
