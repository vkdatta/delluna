export const name="lucid_1-book-a";
export const id="dl_b8afb50b43534e00af47";
export const url=new URL("../icons/lucid_1-book-a.svg?v=1cdd0c177c2b5bbe07466fcb42eed09b0fe5ffb134607f98bf6242b0bade0b6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
