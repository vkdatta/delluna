export const name="category_search";
export const id="dl_b4c4e80801042756dbba";
export const url=new URL("../icons/category_search.svg?v=7e6e2a029782e5b7c8876b1551504a789d452e8c914631ce9ab6e8fa099f173c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
