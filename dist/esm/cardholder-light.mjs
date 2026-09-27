export const name="cardholder-light";
export const id="dl_73498d91617741b39d0a";
export const url=new URL("../icons/cardholder-light.svg?v=98a05c8f5559716604b2affe37b93a3a62c2c1ce84c82770487e0857c15958dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
