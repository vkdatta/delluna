export const name="books_movies_and_music";
export const id="dl_ef961229b52feab93ee1";
export const url=new URL("../icons/books_movies_and_music.svg?v=b6bb95bd7e919156f8e69c88a623998cc83634cbef492b2a2ca3c6d017a28c49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
