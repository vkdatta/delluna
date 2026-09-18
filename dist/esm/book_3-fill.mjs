export const name="book_3-fill";
export const id="dl_667bb6d06ac5445a8c56";
export const url=new URL("../icons/book_3-fill.svg?v=4189d8c1c4e2364a4481454ad17ed58b0ba049f2724747957e85cf52efe5550c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
