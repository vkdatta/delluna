export const name="bounding-box";
export const id="dl_3907ed2dbaf24eb788bb";
export const url=new URL("../icons/bounding-box.svg?v=4a869281d583554693916ca4897a6e0902566cb4aa7f4f6cc55bc54243724819",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
