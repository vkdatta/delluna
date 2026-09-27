export const name="butterfly-duotone";
export const id="dl_b31bfadd5b1f4cfb858c";
export const url=new URL("../icons/butterfly-duotone.svg?v=cc58c410eb2da952afd33790f2804a0499092f1fbc3d7461dc673bf3a51bfd21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
