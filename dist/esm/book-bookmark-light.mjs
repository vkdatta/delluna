export const name="book-bookmark-light";
export const id="dl_02d3b44ed76c4883b907";
export const url=new URL("../icons/book-bookmark-light.svg?v=1288accee0bfb7141fb55ffb5b67ef933dfbab143174fb0b6ad55ca2ffa68995",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
