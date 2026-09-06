export const name="hand-heart";
export const id="dl_f90552daef4146ad86d0";
export const url=new URL("../icons/hand-heart.svg?v=8797f9ca2bc8620c56c9dead90c047724176a611d52e613c6412aa16745bf93e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
