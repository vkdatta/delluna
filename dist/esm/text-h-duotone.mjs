export const name="text-h-duotone";
export const id="dl_65251fd24c92470c88d3";
export const url=new URL("../icons/T/text-h-duotone.svg?v=2f130313f3bc0300206d2595268287c0874e5e0226bb53c7f43c2c3a803c02ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
