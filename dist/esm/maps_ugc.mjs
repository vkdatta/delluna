export const name="maps_ugc";
export const id="dl_4e00f710f2593ff79285";
export const url=new URL("../icons/maps_ugc.svg?v=2b62016d5762b2b5fc206a37e0f3a071e04bd4cdf38028acec6ca8f8141158f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
