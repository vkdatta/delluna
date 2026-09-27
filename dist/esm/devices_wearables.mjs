export const name="devices_wearables";
export const id="dl_5563884dcb42a5d722a3";
export const url=new URL("../icons/devices_wearables.svg?v=058b494634c411ae75da73c07f8c1651e7f87716b876bbdcd1b8d766976667f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
