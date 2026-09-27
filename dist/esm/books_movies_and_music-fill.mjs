export const name="books_movies_and_music-fill";
export const id="dl_809b8b2c449299da9c0f";
export const url=new URL("../icons/books_movies_and_music-fill.svg?v=df3e4e165bad8d060fd97920650c539f712c25fa9fbfbd2420143c9d577e4c00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
