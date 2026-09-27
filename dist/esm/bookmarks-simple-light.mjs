export const name="bookmarks-simple-light";
export const id="dl_ba3877dc5d044b93aebf";
export const url=new URL("../icons/bookmarks-simple-light.svg?v=edf6516aceaf68a6d02ba79693d7cbcd86a099e1ef324bb0be649cd6ff6f3699",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
