export const name="quotes-light";
export const id="dl_e8c1ec4ebf2946259493";
export const url=new URL("../icons/quotes-light.svg?v=fd7095c154bd54b27104268682ee0157f79f52268b3ac864c6450a5b628ce25c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
