export const name="filter_8";
export const id="dl_6be80aac9525e745789a";
export const url=new URL("../icons/filter_8.svg?v=5933156cde6ec41138523f83b40eec043de0e3cfd079cfa4612a3a25d3878b54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
