export const name="playlist_add_circle";
export const id="dl_258c4789759bec20b7be";
export const url=new URL("../icons/playlist_add_circle.svg?v=6acbe0d95fe804044bb6e58f6c98aa04b2553a74d4da551520150cf44b2a571f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
