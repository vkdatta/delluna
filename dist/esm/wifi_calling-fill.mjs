export const name="wifi_calling-fill";
export const id="dl_5d412341765e21a54957";
export const url=new URL("../icons/wifi_calling-fill.svg?v=cdeefd635b42db09b780dcf4317ecda811b07eaaa4bdc0f52223e3a3c69de551",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
