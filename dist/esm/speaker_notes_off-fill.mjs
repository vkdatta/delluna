export const name="speaker_notes_off-fill";
export const id="dl_cd1a409ea653f4b499c1";
export const url=new URL("../icons/speaker_notes_off-fill.svg?v=a3e944bd21e58978cdb35fc28ec62b805d07576f98e0fba940673343960f40f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
