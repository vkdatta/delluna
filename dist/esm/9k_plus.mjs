export const name="9k_plus";
export const id="dl_707837bcb18a883116e5";
export const url=new URL("../icons/9k_plus.svg?v=8a2236eccd7bbf45d0bdedc232342439c21200ef3f9792e113a29c6695331ee0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
