export const name="settings_slow_motion-fill";
export const id="dl_ad9765c867d645fe075a";
export const url=new URL("../icons/settings_slow_motion-fill.svg?v=dd52008842e7608efd85ceaf5672f3a5e88ac796f153de9f58c2708a8a370b85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
