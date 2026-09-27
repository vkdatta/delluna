export const name="book";
export const id="dl_d4156804ceb84606a76b";
export const url=new URL("../icons/book.svg?v=fc4e8d8e31e52483a52dac1a13de7c472b298e855ce18271ed28150a8ae54a87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
