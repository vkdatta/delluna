export const name="twitter-logo-bold";
export const id="dl_cf0b276b313b987a5606";
export const url=new URL("../icons/twitter-logo-bold.svg?v=ab45ccb54cf7a2de16ffab4aa294e449038219bb20c9235e10f939b34be1564b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
