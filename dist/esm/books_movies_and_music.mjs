export const name="books_movies_and_music";
export const id="dl_30ba713be08844f6815f";
export const url=new URL("../icons/B/books_movies_and_music.svg?v=9b1fbc6ecbfd4203630c1e729c99072f9fd74f4714d8588c6d009bf427c98375",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
