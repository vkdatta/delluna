export const name="playlist_play";
export const id="dl_1b03cc85814c4d96a481";
export const url=new URL("../icons/P/playlist_play.svg?v=f070b18f41b85e8e116426ff94584c4be0c58c34451076c52cd12968662415de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
