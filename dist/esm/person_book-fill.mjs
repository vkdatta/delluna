export const name="person_book-fill";
export const id="dl_9a3557998a6e42739e32";
export const url=new URL("../icons/person_book-fill.svg?v=1b7d2a1a1a393cf4ee55fee9701c57d40a10d8ff630f443c376c8d15fa4b847f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
