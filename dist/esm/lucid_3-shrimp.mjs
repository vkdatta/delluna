export const name="lucid_3-shrimp";
export const id="dl_ecb60117bf6245e99252";
export const url=new URL("../icons/lucid_3-shrimp.svg?v=dd92128bdd0bd1eceb8003f24719a6434d2cc7524d4aa0fa86ab66e613358ece",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
