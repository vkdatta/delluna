export const name="signal_cellular_alt_off";
export const id="dl_d163f5f7c8114c7d9cd7";
export const url=new URL("../icons/signal_cellular_alt_off.svg?v=f4e3f39e814bb299095b2cbd690481f14863b300acd503c6f83e703e50ddb018",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
