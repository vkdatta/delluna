export const name="router_off";
export const id="dl_60ad37a6d6214910c911";
export const url=new URL("../icons/router_off.svg?v=2dbda4ac7a6a160f3f20282896003164090b62373111fe2cb03c4f7c232a39ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
