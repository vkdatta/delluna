export const name="books_movies_and_music-fill";
export const id="dl_03f7da2c7d164c6d8ed7";
export const url=new URL("../icons/B/books_movies_and_music-fill.svg?v=dd8ffad39fe835d3ab570c6b1eb904065624ba253a0716072cec8b59378ce638",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
