export const name="wifi_calling_bar_1-fill";
export const id="dl_8356df0e6d0c64b17a3f";
export const url=new URL("../icons/wifi_calling_bar_1-fill.svg?v=e469c49870e57b9a6703676618f0a18af77a329ab1f366d25485b21e3a63a193",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
