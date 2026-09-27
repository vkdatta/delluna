export const name="wifi_calling-fill";
export const id="dl_d919421ffa79d11c5312";
export const url=new URL("../icons/wifi_calling-fill.svg?v=b01fd481f0c1b1bfa44578a53364ceeef6d641ab2e54c826458ab636f2af2f6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
