export const name="category_search-fill";
export const id="dl_9503c7d457254422a39b";
export const url=new URL("../icons/C/category_search-fill.svg?v=62c1e1761130cf9e210ef1939d19f3d902ba8c3efe1fb78d196ec91ebc1fb7a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
