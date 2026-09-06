export const name="music-note-duotone";
export const id="dl_fc8fb87a20b145c89e79";
export const url=new URL("../icons/music-note-duotone.svg?v=912200834e238b0f1d3b40509624b29a8d0efab6cd5129fa83f7bbbb3fc645c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
