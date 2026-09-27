export const name="category_search-fill";
export const id="dl_975dfc5fee8637f64589";
export const url=new URL("../icons/category_search-fill.svg?v=2885ff929f05e6ab387c2f55c297e6cc6d580c018ccccb81673c382224e10698",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
