export const name="important_devices-fill";
export const id="dl_ab53fb9ff722a83b71bc";
export const url=new URL("../icons/important_devices-fill.svg?v=c5e0c0c25471f16c43185dc724597a076659cb3de65a8c7002080dfe0574b063",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
