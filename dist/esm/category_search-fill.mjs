export const name="category_search-fill";
export const id="dl_0c669cf14d4fe291edf3";
export const url=new URL("../icons/category_search-fill.svg?v=cd6a95c3d5a0c7074c9dc60b7a1be71f1e222d019d8c5fcdea46d6a995db50f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
