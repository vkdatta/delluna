export const name="shopping_bag-fill";
export const id="dl_e0dfc05a7bb89ad91b23";
export const url=new URL("../icons/shopping_bag-fill.svg?v=6ba7d482c07aa369275208c3ebd0669148a10cd475edde909d8bb7c40a8a3fa5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
