export const name="traffic-cone";
export const id="dl_6da3c2b2972a40b99ba4";
export const url=new URL("../icons/traffic-cone.svg?v=4b3412cbac4270114454c27a7a7310e72ce5617f6bb4ebf8f638e1a889944652",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
