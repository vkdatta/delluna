export const name="bookmarks-simple-light";
export const id="dl_ba3877dc5d044b93aebf";
export const url=new URL("../icons/bookmarks-simple-light.svg?v=79947d69b744624ab72dd045be6364ff385aa6f74f0cfda003e863b596190868",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
