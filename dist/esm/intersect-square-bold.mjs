export const name="intersect-square-bold";
export const id="dl_6a084f370d124cf086f2";
export const url=new URL("../icons/intersect-square-bold.svg?v=56fb884edf01aab94d54e39f0faa58a8912ef026ce5d3c36ad461d26def5eecb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
