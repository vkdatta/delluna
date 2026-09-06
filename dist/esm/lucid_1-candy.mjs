export const name="lucid_1-candy";
export const id="dl_9527495a200f44b095fe";
export const url=new URL("../icons/lucid_1-candy.svg?v=99da1bb8f7eda251bff7581cdf8c5b9e13a2ae4d43bf32521b5d22a514e52739",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
