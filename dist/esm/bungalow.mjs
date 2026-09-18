export const name="bungalow";
export const id="dl_9c4faa3a41df42619108";
export const url=new URL("../icons/bungalow.svg?v=b1052255339a1ef5f982fd102e68a04d3492731052fd2dcd311943101f1600ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
