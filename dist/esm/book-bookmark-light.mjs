export const name="book-bookmark-light";
export const id="dl_02d3b44ed76c4883b907";
export const url=new URL("../icons/book-bookmark-light.svg?v=0b4c72efaea44f513fec42f81233976ccfa1faef72ece65dbccf2f3ff8c77d1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
