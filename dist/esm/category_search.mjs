export const name="category_search";
export const id="dl_c31f49266da4bdb74eb7";
export const url=new URL("../icons/category_search.svg?v=315572cc35192f55418da7b9698708ae7e2afa9b494c31a9e6d791efc64edcef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
