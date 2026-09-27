export const name="stadia_controller-fill";
export const id="dl_e25e949045376e9463e9";
export const url=new URL("../icons/stadia_controller-fill.svg?v=a738f0725af44cfa97e426094a29626df866bcfe34454a78a07ee073b692b2da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
