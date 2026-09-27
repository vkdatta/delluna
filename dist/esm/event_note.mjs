export const name="event_note";
export const id="dl_7c2e1d493a59ed6c8734";
export const url=new URL("../icons/event_note.svg?v=d7db4aadb8f342c1db07317267eee6746b9a9258dba0ebeeb67b1be4ee2366a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
