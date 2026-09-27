export const name="bookmarks-duotone";
export const id="dl_0bb19107cbdd40dc909c";
export const url=new URL("../icons/bookmarks-duotone.svg?v=2609baf8bc856e391146ee2fef74fb9d01ad26d5decaf79af8067dcb98502874",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
