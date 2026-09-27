export const name="no_meeting_room";
export const id="dl_f125fc68e43487814d4d";
export const url=new URL("../icons/no_meeting_room.svg?v=b0839a10a76f399c375e105653eff67c955f26de73858e981ef37b36aa67c153",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
