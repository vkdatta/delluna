export const name="library_books-fill";
export const id="dl_3453ce9b050b47b1f2b7";
export const url=new URL("../icons/library_books-fill.svg?v=4f4be8392c9f38e8704199ffab190cc262537adc35339d272cde085a29c8f812",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
