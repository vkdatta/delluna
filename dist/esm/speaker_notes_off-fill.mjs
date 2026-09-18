export const name="speaker_notes_off-fill";
export const id="dl_cb315c9c8dfd4d2b95ae";
export const url=new URL("../icons/S/speaker_notes_off-fill.svg?v=e4662dc5367fa0de5aee3459bfc81d23f56246098ceb85a9e8c5ac452b77973a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
