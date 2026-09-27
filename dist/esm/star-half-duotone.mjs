export const name="star-half-duotone";
export const id="dl_749d8c6585d84bf5231d";
export const url=new URL("../icons/star-half-duotone.svg?v=41082caa2e1e7a17b83498f9c38e6895450d768f4a452f9630ad5d0010f350ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
