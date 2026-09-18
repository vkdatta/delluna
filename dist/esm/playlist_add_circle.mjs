export const name="playlist_add_circle";
export const id="dl_554e9c44939f4f00aa88";
export const url=new URL("../icons/playlist_add_circle.svg?v=56de7e67310ba4cc877dcab381a1bb786717b7c25c0d655ee1bf2a7461e2cb6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
