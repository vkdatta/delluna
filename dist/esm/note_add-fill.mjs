export const name="note_add-fill";
export const id="dl_3b3e0f8637490d2b6876";
export const url=new URL("../icons/note_add-fill.svg?v=2fe29f31fa3aa309155fc8033f22bd97b034e539c7eb8751830103ebb32a69ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
