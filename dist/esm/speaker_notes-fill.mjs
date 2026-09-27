export const name="speaker_notes-fill";
export const id="dl_bbc95a0a5bd403ba9019";
export const url=new URL("../icons/speaker_notes-fill.svg?v=b27de895a46edbf372c8a08d770fbeb123c675231ac1445f11a0be71c4eb366a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
