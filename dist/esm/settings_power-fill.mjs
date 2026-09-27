export const name="settings_power-fill";
export const id="dl_5455fabaa5e637b7d266";
export const url=new URL("../icons/settings_power-fill.svg?v=a7172bc050d72b8559a89f6a9f2e4215ae9745e95cc95427fbdca68788938e69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
