export const name="lucid_2-link-2";
export const id="dl_984bfef8abdf48f79539";
export const url=new URL("../icons/lucid_2-link-2.svg?v=f1a2336af0ca5ad520361398988582608d7845cb2b5537e2527f9424cdf4b6d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
