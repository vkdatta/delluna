export const name="thumbs-up-bold";
export const id="dl_80248857a59248cdbfd0";
export const url=new URL("../icons/T/thumbs-up-bold.svg?v=e43079e10233c027e4926de824f5a116693f99a8bb74309d5a5acb6b2d5ddf28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
