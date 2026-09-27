export const name="playlist_add_circle";
export const id="dl_bac0cf1e1fb8a0f6c95f";
export const url=new URL("../icons/playlist_add_circle.svg?v=7ecd4d41e4d8c611d0a0676f8ba639bdc27314a4731b487823484d650d7dfc60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
