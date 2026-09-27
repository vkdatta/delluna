export const name="receipt-x-duotone";
export const id="dl_1a1c7ec6fb274a4e92a8";
export const url=new URL("../icons/receipt-x-duotone.svg?v=091553d4595ba18168dfc83ce59e4ba6f3c24a91110c2c3fb7b199cda09e03bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
