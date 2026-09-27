export const name="electric_rickshaw-fill";
export const id="dl_f460b2b2606eae7e8d4c";
export const url=new URL("../icons/electric_rickshaw-fill.svg?v=377e70e75f3dfcf9754371ed1ebc60dbef44246807385508fd7a22d8f358fe6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
