export const name="handyman";
export const id="dl_ba648992dec64a73b139";
export const url=new URL("../icons/handyman.svg?v=a220a35d9c5cd4982c76186a3cd58e80e07483988e7609770bbcafddba6a6597",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
