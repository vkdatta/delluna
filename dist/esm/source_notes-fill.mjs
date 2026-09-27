export const name="source_notes-fill";
export const id="dl_ca3f8104f0cb86a6f817";
export const url=new URL("../icons/source_notes-fill.svg?v=26c9fc0dd68e70117154ae51b5bfa50bbf85221ddfd8fec195eac18dd0764e63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
