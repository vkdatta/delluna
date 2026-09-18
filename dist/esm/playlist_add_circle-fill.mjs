export const name="playlist_add_circle-fill";
export const id="dl_58d2e86deaea408ab162";
export const url=new URL("../icons/playlist_add_circle-fill.svg?v=2b98f1a9a14f8528445a8e94d96cd8ed4d14b344289ab63a8ddf7c015dba798f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
