export const name="thermometer_loss-fill";
export const id="dl_29c63fe0c31d5c009a25";
export const url=new URL("../icons/thermometer_loss-fill.svg?v=dfa95026375de04d9a92cbd453f4e7e5e04cb8a3d561adcf41f4eace71dddd52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
