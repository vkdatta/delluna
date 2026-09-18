export const name="turn_sharp_left";
export const id="dl_3a3afa1cbaa8400fb524";
export const url=new URL("../icons/T/turn_sharp_left.svg?v=7b706574272e7fa2039b6b5ad18695cad6d53f9ae94e46e85131b5166edb304d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
