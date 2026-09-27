export const name="page_header-fill";
export const id="dl_b929b375698c32a11e7c";
export const url=new URL("../icons/page_header-fill.svg?v=864939886348a5ed77f180bbc7ed5d3f95c0376aaa498455afe735a780c9ef3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
