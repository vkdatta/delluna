export const name="vignette-fill";
export const id="dl_3f11c99a00c74cc38c28";
export const url=new URL("../icons/V/vignette-fill.svg?v=315210b591a2b2c43b0040a073b8efbae0e0cfdb4a3b8ff1acf7549d8ee9fafc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
