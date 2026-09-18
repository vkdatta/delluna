export const name="houseboat";
export const id="dl_68770b3ac2bf45e7b828";
export const url=new URL("../icons/houseboat.svg?v=4b758d7bf02f19280f16b16ea5fb067d12df891fe1e46b201bcd68512c5bf192",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
