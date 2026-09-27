export const name="book-light";
export const id="dl_4bb111efda844a8680cd";
export const url=new URL("../icons/book-light.svg?v=9e163634760e8dc7616da20b4871eec61b49f365d5db66bca9921bbbbdc1547c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
