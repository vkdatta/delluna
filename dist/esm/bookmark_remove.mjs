export const name="bookmark_remove";
export const id="dl_6d2e7a43721647a99585";
export const url=new URL("../icons/bookmark_remove.svg?v=dae1ad294867d7c7d6c3442e101adabffbb2b27dbe0f3d94217ff889d9125f92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
