export const name="article-light";
export const id="dl_f8949f40795f46daabf7";
export const url=new URL("../icons/article-light.svg?v=38296fa05296c62d53d1949542b3b5e1a6b0bdf9d9d41d73c15b6b518c687443",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
