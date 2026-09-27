export const name="export_notes";
export const id="dl_726965ba44dcca7ee61a";
export const url=new URL("../icons/export_notes.svg?v=1480b403da9f457a95d3a7794a0965bcff62af3cca9f20737ead2be70fa13131",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
