export const name="lucid_1-banana";
export const id="dl_f222c1590462433ea979";
export const url=new URL("../icons/lucid_1-banana.svg?v=9b04d0bef33240834277ca682f70624e047777c6530c76b6de6857431e709989",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
