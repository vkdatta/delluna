export const name="shopping-bag-open-duotone";
export const id="dl_c2538c92196e35a7785f";
export const url=new URL("../icons/shopping-bag-open-duotone.svg?v=3afb0ab7e58a59e60b55343f2fba9073d51264f573207d8b67e479a6a601c3a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
