export const name="bookmarks-simple-light";
export const id="dl_ba3877dc5d044b93aebf";
export const url=new URL("../icons/bookmarks-simple-light.svg?v=47965a5609bca21d21c00cabf492a0065ca4a7603e8430346154ef83b223cb85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
