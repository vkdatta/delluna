export const name="mobile_vibrate-fill";
export const id="dl_a12f78b6e7b29cb3514a";
export const url=new URL("../icons/mobile_vibrate-fill.svg?v=4df39ed8e250e69df60d6d49a35107a744aa1f41cbc0398e20d9e739a856888e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
