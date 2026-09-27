export const name="currency-inr";
export const id="dl_1e84d7eb16424d7a956e";
export const url=new URL("../icons/currency-inr.svg?v=86fa5a1bc8cc168a610372a678fc8fe9b161952e852362c6e5999f43d62f3474",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
