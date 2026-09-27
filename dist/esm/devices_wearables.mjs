export const name="devices_wearables";
export const id="dl_93f998bc4de60dfa40df";
export const url=new URL("../icons/devices_wearables.svg?v=ad3ad41bce0f9973e4b498f8a78b5ea7c0ae9ce49d55f2e22186420507f515b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
