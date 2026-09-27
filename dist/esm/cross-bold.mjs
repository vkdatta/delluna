export const name="cross-bold";
export const id="dl_22302209a4614a1bb538";
export const url=new URL("../icons/cross-bold.svg?v=07d1957b0737629aad932827c120abe1824c1d67210de9a5d75a807a5ec44241",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
