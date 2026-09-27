export const name="volleyball-duotone";
export const id="dl_056c1441a850281ec735";
export const url=new URL("../icons/volleyball-duotone.svg?v=6da7a440b2a267a2e380155a4c9f6083e16b07e6f3a0a805fe9f3b7d4dba06f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
