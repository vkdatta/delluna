export const name="lucid_1-candy";
export const id="dl_9527495a200f44b095fe";
export const url=new URL("../icons/lucid_1-candy.svg?v=4e6cf5ce6a5a29289974d636078fdfad28adff4ac67bbd3a97db86c74f446d4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
