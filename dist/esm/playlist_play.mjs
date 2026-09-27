export const name="playlist_play";
export const id="dl_31b512980e4dc0ac9f54";
export const url=new URL("../icons/playlist_play.svg?v=50881a0873f76af46535f636cadddc709ab0f586014ff5d50fbccb76d642fa0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
