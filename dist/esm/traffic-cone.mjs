export const name="traffic-cone";
export const id="dl_6da3c2b2972a40b99ba4";
export const url=new URL("../icons/traffic-cone.svg?v=527b9a8bc8123c278f000a5b9ae9607bec75690f3fb79a0ada3e550bb4d2e321",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
