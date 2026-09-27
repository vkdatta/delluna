export const name="music-notes-duotone";
export const id="dl_4a857ecf86a04f56b629";
export const url=new URL("../icons/music-notes-duotone.svg?v=6748a080de88cb23f368d47eb670d085514dda2094aeddc536f869c682b0cdd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
