export const name="book-duotone";
export const id="dl_7c25a9288669402a8028";
export const url=new URL("../icons/book-duotone.svg?v=bd8ce8b050a6ea7f037c19b3c04c2fef9b8c6a91ee5439dedd48e5ac3aafec2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
