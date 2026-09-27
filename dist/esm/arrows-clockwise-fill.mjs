export const name="arrows-clockwise-fill";
export const id="dl_7ffe049cb13a43d19636";
export const url=new URL("../icons/arrows-clockwise-fill.svg?v=d2f9718177d341580cb8a14bdb15053d495801956675cd6d3e2e39dfd0da9b59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
