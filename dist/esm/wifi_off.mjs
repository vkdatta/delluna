export const name="wifi_off";
export const id="dl_f273bc09ace522f65a49";
export const url=new URL("../icons/wifi_off.svg?v=1b1617bc2471530f563dd2428a667daa5069185ebad35057dabeb7655b7fe858",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
