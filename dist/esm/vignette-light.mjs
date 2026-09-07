export const name="vignette-light";
export const id="dl_35f64c9fe69f4c1a9f2b";
export const url=new URL("../icons/V/vignette-light.svg?v=7261a075c2463fefca48d3f05de32a40fcb92df76df502ee4a65bcb56815be5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
