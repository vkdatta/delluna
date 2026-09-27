export const name="backlight_high_off-fill";
export const id="dl_d13e130d60876c3c588d";
export const url=new URL("../icons/backlight_high_off-fill.svg?v=df48d068e290d3ca06caf194e52b957c9e8746deaa53b4c694dbfc76a86caa5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
