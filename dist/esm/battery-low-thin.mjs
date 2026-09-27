export const name="battery-low-thin";
export const id="dl_f70caa34b1a1400d9e19";
export const url=new URL("../icons/battery-low-thin.svg?v=5bb6a680694a5ce67c47201d002d15e487410331c119fe1205f9f2591529e567",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
