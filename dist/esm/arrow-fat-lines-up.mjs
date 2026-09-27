export const name="arrow-fat-lines-up";
export const id="dl_9c0b9e0331f14bb2a2bb";
export const url=new URL("../icons/arrow-fat-lines-up.svg?v=8cea175d7a21bcadb9e6b00b137d507ad57d6a165c40bf718342451edc2d3c60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
