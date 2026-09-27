export const name="collections_bookmark";
export const id="dl_65be26d29a882d8d235b";
export const url=new URL("../icons/collections_bookmark.svg?v=0a62ac7e4ff80a8bf689a90402efedb05ddfc7d3ca88dd690d2e79834e0097a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
