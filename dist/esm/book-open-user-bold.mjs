export const name="book-open-user-bold";
export const id="dl_12e3803f162242fc9329";
export const url=new URL("../icons/book-open-user-bold.svg?v=f68783a5d7af45299a01152f8decf979e7357f71ef44f906f5b9f9dfe56aabf2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
