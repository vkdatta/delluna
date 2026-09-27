export const name="article-medium-duotone";
export const id="dl_6e22716310ca4a77a037";
export const url=new URL("../icons/article-medium-duotone.svg?v=3f2095a1ce31a9e9a7ba312f74b00684900e2e242a3d607cf9403e8eb0e33425",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
