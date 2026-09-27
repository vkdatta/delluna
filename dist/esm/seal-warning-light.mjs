export const name="seal-warning-light";
export const id="dl_4d555de1a5ba77a91721";
export const url=new URL("../icons/seal-warning-light.svg?v=f792ce851445c4290159d3acc99aa74a8db915a3c68a575156a5586aa3fd7cbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
