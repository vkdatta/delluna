export const name="books_movies_and_music";
export const id="dl_04170268826e976983f6";
export const url=new URL("../icons/books_movies_and_music.svg?v=c5b994f838a36ddc0aa480ec022addc220a6360680c99420b481631af830d23a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
