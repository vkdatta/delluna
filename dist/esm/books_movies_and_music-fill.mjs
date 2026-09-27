export const name="books_movies_and_music-fill";
export const id="dl_610fe6f1fac92fa1667b";
export const url=new URL("../icons/books_movies_and_music-fill.svg?v=d7e65e8fef33be57cb1d9bf7b878c6c3f94bb7a18b5f51cc798dd4bb590e6da2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
