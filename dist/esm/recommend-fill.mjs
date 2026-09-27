export const name="recommend-fill";
export const id="dl_2012df637b816d64f8e3";
export const url=new URL("../icons/recommend-fill.svg?v=15a306d120f8ad7f7a79268fad5f65ecb218a21dfe5d016cbd98f2279f78c2ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
