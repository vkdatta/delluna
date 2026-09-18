export const name="wifi_proxy-fill";
export const id="dl_4adda5a66feb4a35b7d5";
export const url=new URL("../icons/wifi_proxy-fill.svg?v=f7f283a263da19cfa00d2ea772607844f868777e2edebd195467b3b3861938a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
