export const name="monitor_weight_gain";
export const id="dl_1088e2a877cec86d9dce";
export const url=new URL("../icons/monitor_weight_gain.svg?v=77deecb827e0bf0a60da5e47bde2a02e17fceefb94223a61fe333a021bc9a3ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
