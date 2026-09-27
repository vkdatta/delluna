export const name="network_check-fill";
export const id="dl_737c328c24d2e42a3520";
export const url=new URL("../icons/network_check-fill.svg?v=16f84a5387d71a79cb1795b11708c67f31adf262e7d5c95a6edbd232cec18d7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
