export const name="badge";
export const id="dl_725f1434f65348e99731";
export const url=new URL("../icons/badge.svg?v=433f45cf086cc856d3259eec303f0e0f7847c77860c5dc8e6c702648b319ab7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
