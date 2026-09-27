export const name="wifi_lock-fill";
export const id="dl_542bf75fd040ba245e8d";
export const url=new URL("../icons/wifi_lock-fill.svg?v=943dd8adb8f90e84d4929b8738888475cfea06d0240e2b5a608108effef3e9f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
