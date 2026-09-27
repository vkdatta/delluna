export const name="videogame_asset-fill";
export const id="dl_b10d3b618b7c2139cbea";
export const url=new URL("../icons/videogame_asset-fill.svg?v=b5eae20c1798e71821248a8fd7e8c9881b0208f5810d39f8713b6ca9c72021c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
