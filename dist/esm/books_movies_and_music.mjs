export const name="books_movies_and_music";
export const id="dl_23ed59ac1233e0615731";
export const url=new URL("../icons/books_movies_and_music.svg?v=424de6dfbf37834a24805635eea6ee67df363acb3708eb1737143c2ca64f1f19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
