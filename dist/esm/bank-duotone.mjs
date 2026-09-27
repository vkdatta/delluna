export const name="bank-duotone";
export const id="dl_8dfd66391fea47b6b8cf";
export const url=new URL("../icons/bank-duotone.svg?v=de81eb3c30bb9d2533f4d5898e007512a8aa776b8dbb2b75f86ed71fd8e9a0fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
