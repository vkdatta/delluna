export const name="export_notes-fill";
export const id="dl_73af2138cc401470bcba";
export const url=new URL("../icons/export_notes-fill.svg?v=a0488b4feed75c8efaafc80da4ae391d858546ce285423666d0ca7a043d997b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
