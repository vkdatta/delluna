export const name="globe_book-fill";
export const id="dl_47f9f793f7cd1e325406";
export const url=new URL("../icons/globe_book-fill.svg?v=43a7bc9158688372bdd8fbdffc605911ca272a724db045ec4b507ecc7b7ee849",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
