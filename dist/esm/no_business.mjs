export const name="no_business";
export const id="dl_25e553d2c8a5c7b35e86";
export const url=new URL("../icons/no_business.svg?v=075897f2c33cc54a7e9534519b2014891f009d27b121dd84fa85f440d0b293de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
