export const name="less-than-or-equal-duotone";
export const id="dl_934d72f8e355471d8a05";
export const url=new URL("../icons/less-than-or-equal-duotone.svg?v=87eb5f24a3ca877b08c2ef9e6278e62934d85295a63ec28fdd70494128406dfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
