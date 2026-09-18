export const name="subtitles_off-fill";
export const id="dl_d2d4ac94bd3146a7b307";
export const url=new URL("../icons/subtitles_off-fill.svg?v=2d0a08aae3b4d8b36855dc78890e4e3a66b037a87765615206d3ec21e52c75cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
