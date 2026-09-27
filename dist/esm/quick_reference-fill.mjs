export const name="quick_reference-fill";
export const id="dl_d70fec6103cfd54b0f39";
export const url=new URL("../icons/quick_reference-fill.svg?v=331c19f00f0e636a461f53fe33b82643b03efeeda9e079ffce0604da8db41074",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
