export const name="device_hub";
export const id="dl_433af72864364afcbd5d";
export const url=new URL("../icons/device_hub.svg?v=686683b1467ba0a1d2887c28d92f0e4f885e9c3aa91f3a561eec97676d127ffd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
