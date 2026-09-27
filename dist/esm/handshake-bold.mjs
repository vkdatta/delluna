export const name="handshake-bold";
export const id="dl_b62021f0f56b4321aef2";
export const url=new URL("../icons/handshake-bold.svg?v=0e21da8ba35b33c5c2e772b12f3b94bdffa5f1882b4c99689baac040c61416ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
