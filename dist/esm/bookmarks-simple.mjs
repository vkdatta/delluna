export const name="bookmarks-simple";
export const id="dl_02a1e7904dbf4036ba03";
export const url=new URL("../icons/bookmarks-simple.svg?v=8b71fc800f4dc5f3d143388d5f90d725bf8e868ba4c3e0159d6f8d06e3739c28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
