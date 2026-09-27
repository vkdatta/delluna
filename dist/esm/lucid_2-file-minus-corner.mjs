export const name="lucid_2-file-minus-corner";
export const id="dl_630c8f7417484459b47e";
export const url=new URL("../icons/lucid_2-file-minus-corner.svg?v=e6873e3cc535b3b96235a4be56e65b37cd774b35f9029ad7cdc5c0a0ee0f70f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
