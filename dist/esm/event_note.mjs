export const name="event_note";
export const id="dl_35a612e04461d3a7b14e";
export const url=new URL("../icons/event_note.svg?v=0809e49312ad92e6911c9420f871fd177854ba21554708a125333ec8854dbf22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
