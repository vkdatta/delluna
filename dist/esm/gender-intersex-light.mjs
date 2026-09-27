export const name="gender-intersex-light";
export const id="dl_d9327b07f2af416db57e";
export const url=new URL("../icons/gender-intersex-light.svg?v=81ae64f6266e3eedb695c20e1e67a625a1c4bc1cee1553427026f3f0a65b1a5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
