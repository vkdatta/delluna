export const name="crosshair-bold";
export const id="dl_e318177c87ea4662a2ca";
export const url=new URL("../icons/crosshair-bold.svg?v=5354fed98e0445ff87a3aba0fe2845d46cd3cdc041c0b4763b192355d6f5d9ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
