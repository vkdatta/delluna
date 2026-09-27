export const name="book-bookmark";
export const id="dl_5f38fb4bb4ec4c429256";
export const url=new URL("../icons/book-bookmark.svg?v=8b641e8c95f627c7117c1e97b4c192d098e213d2c911a603c7c5e251583bb71a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
