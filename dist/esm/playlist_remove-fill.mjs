export const name="playlist_remove-fill";
export const id="dl_3ff0d8eddd0f4f22a0f8";
export const url=new URL("../icons/P/playlist_remove-fill.svg?v=c1533022979a06aab6c52615535d69e15db7c52692b328b374b73f772f7e62bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
