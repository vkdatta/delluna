export const name="package-bold";
export const id="dl_558cc23bab7441e79a3b";
export const url=new URL("../icons/package-bold.svg?v=6eecb305e502c79e58d4a3e8193224cdcc8b3166a72d3fec97fe7ef8abeeb81d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
