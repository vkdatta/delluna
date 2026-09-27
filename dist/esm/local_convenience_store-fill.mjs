export const name="local_convenience_store-fill";
export const id="dl_09387088fd00688acd6e";
export const url=new URL("../icons/local_convenience_store-fill.svg?v=4b4d48c5991011c21a4da705e70886dccc8d445ecb604458239197db5c783f31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
