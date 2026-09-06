export const name="fire-truck-light";
export const id="dl_5c9ece38de63427a8c2b";
export const url=new URL("../icons/fire-truck-light.svg?v=d0276650d0e2114540f8df5a076745b2988646cf9e6b94a91537a353d791f8dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
