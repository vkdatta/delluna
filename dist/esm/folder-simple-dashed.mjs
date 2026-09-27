export const name="folder-simple-dashed";
export const id="dl_8a89d29cb964493cb5a9";
export const url=new URL("../icons/folder-simple-dashed.svg?v=13ff77420176e1df9e0f343e8bf6c51d4d17d39c91230e211bd6d22d220365b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
