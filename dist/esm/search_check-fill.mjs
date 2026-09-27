export const name="search_check-fill";
export const id="dl_4ab58e1e01d7306fdb72";
export const url=new URL("../icons/search_check-fill.svg?v=a5f70ceecc0eab78d6e1faf41fa852d2bd1b4a70d3111fceaac8a1c8d95d1f3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
