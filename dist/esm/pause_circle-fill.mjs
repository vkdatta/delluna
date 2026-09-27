export const name="pause_circle-fill";
export const id="dl_e6d4ec3fd820595d3a44";
export const url=new URL("../icons/pause_circle-fill.svg?v=35c239b2b45d097d60a9a3d8ef282977ec62c4144b420b12a86730c0072325da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
