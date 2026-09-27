export const name="blinds_2";
export const id="dl_186e49b27ff2364ec44f";
export const url=new URL("../icons/blinds_2.svg?v=5a8dad5b96302d1d18e13735346b6750c5852c0e3cd9208a1791c199d10ac866",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
