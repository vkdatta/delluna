export const name="article-medium-bold";
export const id="dl_80caad8dee404e7abb3b";
export const url=new URL("../icons/article-medium-bold.svg?v=b319c4ebd659568dd89e39e26f3a220017cb2c96fc9cb9d2593c9b6b821e1d95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
