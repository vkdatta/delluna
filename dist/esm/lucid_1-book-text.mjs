export const name="lucid_1-book-text";
export const id="dl_638701c14ca6425e9f30";
export const url=new URL("../icons/lucid_1-book-text.svg?v=65697107f463a92df44028f915a7c8b0376aef2ea37e9b9d683272e88acf4d70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
