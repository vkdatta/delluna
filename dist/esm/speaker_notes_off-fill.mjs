export const name="speaker_notes_off-fill";
export const id="dl_fe97ff28f9d6a6a77174";
export const url=new URL("../icons/speaker_notes_off-fill.svg?v=e4662dc5367fa0de5aee3459bfc81d23f56246098ceb85a9e8c5ac452b77973a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
