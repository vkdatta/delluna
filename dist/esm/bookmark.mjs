export const name="bookmark";
export const id="dl_a93eb90c9c75e18b3a87";
export const url=new URL("../icons/bookmark.svg?v=67ee3430c0b7c99088c6c91ce47fd35ba0d1a4ecca87c73cfcc8f538c75ce7e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
