export const name="shooting-star-duotone";
export const id="dl_b2a144a39f25440286cd";
export const url=new URL("../icons/S/shooting-star-duotone.svg?v=08f0c1d054f8d2c5c6ea84d2c2b011f9b1e000fd06a8cf602f1d6fd75cb5e576",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
