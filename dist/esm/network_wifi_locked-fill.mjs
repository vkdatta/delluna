export const name="network_wifi_locked-fill";
export const id="dl_6fa1eddcd21c10f66c20";
export const url=new URL("../icons/network_wifi_locked-fill.svg?v=8ef16a691eab2f32490d2e4d9ac650c5cf8b09eaa759684f0db274b5918f3a6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
