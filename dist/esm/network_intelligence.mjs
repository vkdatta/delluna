export const name="network_intelligence";
export const id="dl_ffa9a0208ce67613044d";
export const url=new URL("../icons/network_intelligence.svg?v=ef469fdcccf765f78f9a2280c2645504a772f8d253c7455ea470e6ea4e4307f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
