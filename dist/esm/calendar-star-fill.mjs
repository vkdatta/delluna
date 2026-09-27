export const name="calendar-star-fill";
export const id="dl_83bb09e996ca49eaa875";
export const url=new URL("../icons/calendar-star-fill.svg?v=6dba0d6f28cd43184a38f2fd3127550b00e916abc6ed5529f0e8f9a859ac2a78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
