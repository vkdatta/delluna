export const name="wifi_lock-fill";
export const id="dl_aacfb141976d1d2e831f";
export const url=new URL("../icons/wifi_lock-fill.svg?v=ada8e55a6a363e3e6606df7a121bc21e27d99745ce14f3a663a85a637a759dd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
