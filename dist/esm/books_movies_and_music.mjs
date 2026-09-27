export const name="books_movies_and_music";
export const id="dl_76a00733f8efe793f02e";
export const url=new URL("../icons/books_movies_and_music.svg?v=9b1fbc6ecbfd4203630c1e729c99072f9fd74f4714d8588c6d009bf427c98375",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
