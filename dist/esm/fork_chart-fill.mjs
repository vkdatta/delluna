export const name="fork_chart-fill";
export const id="dl_0186161f0f5989c6a49f";
export const url=new URL("../icons/fork_chart-fill.svg?v=d771ff373b8a95685bdcc66d3107397ea40a78da7ecc5b6518fa5191261aa295",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
