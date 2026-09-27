export const name="books";
export const id="dl_bf57ce3847844f80b818";
export const url=new URL("../icons/books.svg?v=19040fb0d5a79c99724bd417c732e625dae5f76538af406d5595ba80a38c2772",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
