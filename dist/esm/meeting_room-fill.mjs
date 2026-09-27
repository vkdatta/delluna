export const name="meeting_room-fill";
export const id="dl_7817aa07d74c626c6f1a";
export const url=new URL("../icons/meeting_room-fill.svg?v=fb22f842059a14bb6256e8ef0ea756f09ff10b74a712df308bf02ec29bbdf1c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
