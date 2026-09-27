export const name="signal_cellular_pause-fill";
export const id="dl_fe3b37b8662559da4893";
export const url=new URL("../icons/signal_cellular_pause-fill.svg?v=9ccdef4f6511f0937651abfd93feaa20d5e775173a2459d03a0229eaac9e86af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
