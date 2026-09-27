export const name="device-mobile-light";
export const id="dl_39d29fedfde342ff8709";
export const url=new URL("../icons/device-mobile-light.svg?v=60d9c7ac86221d1dbba21a9149a8e4ac7b29caf4c819ffa4c4f6ce52ede47a84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
