export const name="signal_cellular_add-fill";
export const id="dl_6e580e5516c76654622e";
export const url=new URL("../icons/signal_cellular_add-fill.svg?v=35ec0b4a6b961ec43a131d309aeab3f2ac6fb3145521fa86905968e3b1f9b0bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
