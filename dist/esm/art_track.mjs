export const name="art_track";
export const id="dl_aaefe8e16b070b7be811";
export const url=new URL("../icons/art_track.svg?v=9134bbc228567b86efb0a96571504f36171780b43115295854a735e61188132e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
