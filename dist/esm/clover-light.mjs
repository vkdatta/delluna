export const name="clover-light";
export const id="dl_bc62fab54ad343718388";
export const url=new URL("../icons/clover-light.svg?v=cd6456cc7b3e937a0e7ae7bf794151bf9c4d8ac91939239e5c592d1fdddd5f64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
