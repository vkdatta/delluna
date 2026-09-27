export const name="lucid_1-book-dashed";
export const id="dl_80bfd42d1a0e4dbb861b";
export const url=new URL("../icons/lucid_1-book-dashed.svg?v=84058ade0b4831e2654313de0adefc5efc1fbbccc4d1ea1d99281c174fbdf969",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
