export const name="closed_caption_disabled-fill";
export const id="dl_8319c9b861b40df806cf";
export const url=new URL("../icons/closed_caption_disabled-fill.svg?v=96398cf404b2ed6e76a1e77e6edd4470065d8ddbb1e77ca9992924997459c378",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
