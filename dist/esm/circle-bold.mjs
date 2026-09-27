export const name="circle-bold";
export const id="dl_963ae29c8612423fa8d9";
export const url=new URL("../icons/circle-bold.svg?v=794254bf1d81082baff04d2818d848ef91080f422f78bc0357dbd81253b526ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
