export const name="phosphor-logo-light";
export const id="dl_ab08bdc88a3e4757b540";
export const url=new URL("../icons/phosphor-logo-light.svg?v=6d707db5314329448cde63e6b426e7f3e58aa9bbfa83435b19216cb319d0f796",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
