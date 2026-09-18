export const name="partner_heart";
export const id="dl_f35a930c88e0444c94fe";
export const url=new URL("../icons/P/partner_heart.svg?v=f77e042a10ae63ad77c45dcc41b988b2a3107ab59429e15140776fe8546945f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
