export const name="devices_wearables-fill";
export const id="dl_470afd62686e2b925ded";
export const url=new URL("../icons/devices_wearables-fill.svg?v=e395ddf1866a6f81ccfc2b6323929193660f092f1411fc136561e52a2af4117e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
