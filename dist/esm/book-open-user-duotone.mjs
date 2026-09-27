export const name="book-open-user-duotone";
export const id="dl_2293973717fd407999c9";
export const url=new URL("../icons/book-open-user-duotone.svg?v=b9bb9d65df38505c1abacb8c260be7073823fe8cadceab861837658dc5ab18ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
