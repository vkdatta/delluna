export const name="dots-three-duotone";
export const id="dl_6f40e5f42e8e4a4b8dd1";
export const url=new URL("../icons/dots-three-duotone.svg?v=0c50517ca692f0e7cd58952eb2072e7cb37f60a828e55c2009327cd02c860669",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
