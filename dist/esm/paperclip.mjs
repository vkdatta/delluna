export const name="paperclip";
export const id="dl_a7fe1c9acbcb4affaf36";
export const url=new URL("../icons/paperclip.svg?v=2d21975e0ff342abc6b7095a4fdac9fc4a213b9ac36323b6fc15eb5f09fa1e2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
