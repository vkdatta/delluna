export const name="hash-straight-duotone";
export const id="dl_f31e09e356744fe59e43";
export const url=new URL("../icons/hash-straight-duotone.svg?v=32cb7dedd9f7fcfb71aabc14b14e6ef5997c1ec1edf040401fc627d841359b6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
