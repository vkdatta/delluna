export const name="hash-fill";
export const id="dl_4adda1a91d5f4e75b29e";
export const url=new URL("../icons/hash-fill.svg?v=62cd25679339b88b6fd2af1d0e5828c2514075aba517ef40fefa0027c683f536",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
