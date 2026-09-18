export const name="signal_cellular_nodata";
export const id="dl_826c498a0f7743febb85";
export const url=new URL("../icons/S/signal_cellular_nodata.svg?v=2998b237c2a6b71f8c194b0edb680febcb7ef706fd5c40e3e2ee2ebaf6231b12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
