export const name="arrow-fat-line-up-duotone";
export const id="dl_657549d7443b44ed9d96";
export const url=new URL("../icons/arrow-fat-line-up-duotone.svg?v=fcaf796fe812e49ff3c613dc5ba442d4bdec945f7c4c25749767ce252b85cc35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
