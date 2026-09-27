export const name="note-fill";
export const id="dl_964e40c773ff4d04b3e9";
export const url=new URL("../icons/note-fill.svg?v=e07317482b1dc7c542d8ac0265b968fe50dba23f4050c4b8ee14ff183514ceda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
