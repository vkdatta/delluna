export const name="number-two-fill";
export const id="dl_1954c652b93349cab6d0";
export const url=new URL("../icons/number-two-fill.svg?v=30bafdb653f4202d11e6584df81e688ad22183c0be89e1cff3a2a5bc172225fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
