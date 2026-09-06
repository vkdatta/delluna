export const name="hash-straight-duotone";
export const id="dl_f31e09e356744fe59e43";
export const url=new URL("../icons/hash-straight-duotone.svg?v=19bea174579ffc24b53fb82dc81d477ae503f9656856e1b7b02d900721f9d935",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
