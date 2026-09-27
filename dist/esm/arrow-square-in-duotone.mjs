export const name="arrow-square-in-duotone";
export const id="dl_f3ca522121b043dcad98";
export const url=new URL("../icons/arrow-square-in-duotone.svg?v=e67046d3e789b6bcfff51f107dfd03ac2cb4d3a3e33badb1f56ed669e506e0ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
