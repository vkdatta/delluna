export const name="automation";
export const id="dl_f34118ae81eaa5d0ec66";
export const url=new URL("../icons/automation.svg?v=9c7672eafa2bc1aa664a2d82f12e589e77a61c5b7b3c4a55b39e649624fd5cea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
