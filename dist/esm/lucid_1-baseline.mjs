export const name="lucid_1-baseline";
export const id="dl_d7fd9960a6fc4e4db347";
export const url=new URL("../icons/lucid_1-baseline.svg?v=66e8a014d84058c7754b9199dd11ecba26850d709841c6cd76ccc0e463dbd45b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
