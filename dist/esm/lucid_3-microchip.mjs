export const name="lucid_3-microchip";
export const id="dl_f00b4621fa274a9481b0";
export const url=new URL("../icons/lucid_3-microchip.svg?v=3e2595cd9fa7738a85b913e25b44ede3a6915d2b43d3e02c39a254158dfd3038",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
