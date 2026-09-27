export const name="playlist_play";
export const id="dl_cf9a6232d1ee5387c98e";
export const url=new URL("../icons/playlist_play.svg?v=adcf5e9b74219d8d82205f26e8c50ddd3f07bd6d70541bb0a9e4b74e21e8b4f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
