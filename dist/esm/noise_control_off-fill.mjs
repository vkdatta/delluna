export const name="noise_control_off-fill";
export const id="dl_525a4d03dfa007ffce94";
export const url=new URL("../icons/noise_control_off-fill.svg?v=c662ffa5680edd176e0f92cdaeee86a3e62c1de9f96f7c0d0deb26abc88bf151",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
