export const name="book-bookmark-light";
export const id="dl_02d3b44ed76c4883b907";
export const url=new URL("../icons/book-bookmark-light.svg?v=0f16ce1b50722fc57d634471bd5684691e70bd38c590d90c730042f3939803cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
