export const name="subtitles_off-fill";
export const id="dl_676ddcc6bb3f82fdebf6";
export const url=new URL("../icons/subtitles_off-fill.svg?v=a98163c256bc4e64edd87af013f17d73576f7246646e7cac04f8916a230e520b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
