export const name="tonality-fill";
export const id="dl_74292b013d67b62921ef";
export const url=new URL("../icons/tonality-fill.svg?v=66055336ae887987f7903bce0bcb610f56b81f9d8ad0e16c34fe52c6a8a9b54e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
