export const name="videocam-fill";
export const id="dl_af6aad6c18eafe304f5a";
export const url=new URL("../icons/videocam-fill.svg?v=761fab5614af50c7fcfa36cddd5d1127eb0a74fa3983a1eb37a1af7a4d569b3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
