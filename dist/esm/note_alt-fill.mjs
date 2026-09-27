export const name="note_alt-fill";
export const id="dl_087690583270b8516467";
export const url=new URL("../icons/note_alt-fill.svg?v=475ff3576329104f9040412d3e9557e9b77782549d55414d86a361189a17a12b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
