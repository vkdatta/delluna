export const name="lucid_3-microchip";
export const id="dl_f00b4621fa274a9481b0";
export const url=new URL("../icons/lucid_3-microchip.svg?v=710e76c2e6fe626800b66d3c6a879b60605d159d6242d978a8816c1fed01d5e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
