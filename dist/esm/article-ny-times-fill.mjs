export const name="article-ny-times-fill";
export const id="dl_eb19570125a94e3e8f86";
export const url=new URL("../icons/article-ny-times-fill.svg?v=5213844cfe7cdc3f9d07ffb8b19ed2b3ceb9716ee95daf38e2df7f99aa67f700",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
