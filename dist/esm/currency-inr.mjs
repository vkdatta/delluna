export const name="currency-inr";
export const id="dl_1e84d7eb16424d7a956e";
export const url=new URL("../icons/currency-inr.svg?v=7d4b572e6fadf7e04a2b57e26c8448abb427150ae4a1bed8e453e121b2d58809",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
