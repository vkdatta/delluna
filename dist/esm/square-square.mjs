export const name="square-square";
export const id="dl_a2bdf76b9c314792b112";
export const url=new URL("../icons/square-square.svg?v=a372d939773c6310559689833034d62a1bf876d145eac71cb25805c469acb58f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
