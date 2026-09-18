export const name="closed_caption-fill";
export const id="dl_3c8764b1d3904161b9ba";
export const url=new URL("../icons/closed_caption-fill.svg?v=0fe8de0c4a76cda1a5f9009f2c487d761a20dda61e68bcb7deb4df1210dd3153",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
