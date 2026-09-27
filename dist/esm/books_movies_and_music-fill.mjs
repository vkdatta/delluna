export const name="books_movies_and_music-fill";
export const id="dl_d4f1b1bc40bedf9567f4";
export const url=new URL("../icons/books_movies_and_music-fill.svg?v=dd8ffad39fe835d3ab570c6b1eb904065624ba253a0716072cec8b59378ce638",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
