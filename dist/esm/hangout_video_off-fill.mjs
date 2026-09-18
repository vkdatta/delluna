export const name="hangout_video_off-fill";
export const id="dl_cd7ecb0254484ee28928";
export const url=new URL("../icons/hangout_video_off-fill.svg?v=542ea891df05447bbfd17d7ba646ef63d1f507f4a580cd23bde165eafb1be268",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
