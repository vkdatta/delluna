export const name="lucid_1-book-search";
export const id="dl_861636defcf9401e81c5";
export const url=new URL("../icons/lucid_1-book-search.svg?v=f008e72840e3e85a8c5c1e5c74788dc537398dc809079ae06fde42cdafdad1b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
