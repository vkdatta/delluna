export const name="music-notes-duotone";
export const id="dl_4a857ecf86a04f56b629";
export const url=new URL("../icons/music-notes-duotone.svg?v=3bef98ba3b52c89aa02fa9e77d76aae93cebe71f116afa1eb5df57ff21d17d02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
