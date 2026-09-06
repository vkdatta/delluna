export const name="list-duotone";
export const id="dl_a408ef28af164ec7bf5f";
export const url=new URL("../icons/list-duotone.svg?v=0e928c57bdcaee90844c6043d7b7c35acabe798fb147ad6f2d5c016ea5f94d0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
