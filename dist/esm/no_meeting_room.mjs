export const name="no_meeting_room";
export const id="dl_157b02439a9f23d88559";
export const url=new URL("../icons/no_meeting_room.svg?v=2a08c078113fbe36f366f49f00148bace6fcdd5e1a0875bf9249d5510c3ec75c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
