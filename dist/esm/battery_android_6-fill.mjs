export const name="battery_android_6-fill";
export const id="dl_9af07d2b510c751556c7";
export const url=new URL("../icons/battery_android_6-fill.svg?v=6a6a0a2e04dc5c398e9e6b20672c93f69543e420ba255d28bf0d5762c2bbad4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
