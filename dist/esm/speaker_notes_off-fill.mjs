export const name="speaker_notes_off-fill";
export const id="dl_ae0ccef87343c2e00380";
export const url=new URL("../icons/speaker_notes_off-fill.svg?v=854c41c7a4d5aab3325ef2b0be9ddadb336600fe9cba9c5253e8b8058a2e6cd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
