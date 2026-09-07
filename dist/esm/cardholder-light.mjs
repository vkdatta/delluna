export const name="cardholder-light";
export const id="dl_73498d91617741b39d0a";
export const url=new URL("../icons/cardholder-light.svg?v=34ab693a318590b69a6333b53f375b662efe62ee119c8b7ce009a1ffd7e9046c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
