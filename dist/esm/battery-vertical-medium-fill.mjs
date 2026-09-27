export const name="battery-vertical-medium-fill";
export const id="dl_fc49dc40225b42fa92bf";
export const url=new URL("../icons/battery-vertical-medium-fill.svg?v=7e7479ff4713732b01ca65fa37c25f17cca9425a049a9fa4309745a8e18c786e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
