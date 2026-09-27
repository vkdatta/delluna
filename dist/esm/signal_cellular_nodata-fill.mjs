export const name="signal_cellular_nodata-fill";
export const id="dl_50be5ed88b5ee1e7b61b";
export const url=new URL("../icons/signal_cellular_nodata-fill.svg?v=ba6d43e37b7852cb6655ed9e5134cd6a5e28ecddf06bfa8600acbcf2ab2ae585",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
