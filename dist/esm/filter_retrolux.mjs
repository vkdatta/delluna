export const name="filter_retrolux";
export const id="dl_a4e7b202b00facec3c9c";
export const url=new URL("../icons/filter_retrolux.svg?v=5087635495eb1f55986978510e5b4ec51ade346f2a2ef0b36338e522653c5d3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
