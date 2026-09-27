export const name="article-medium-bold";
export const id="dl_80caad8dee404e7abb3b";
export const url=new URL("../icons/article-medium-bold.svg?v=7036a1b44f943a44f8244cc28de540256b4f7e56069908d43c4db60cc640828b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
