export const name="books-thin";
export const id="dl_dd3dbeaa8cd94f5d8f17";
export const url=new URL("../icons/books-thin.svg?v=a0030563003d42d3f65f3691eb637443c3cecc013d008a74f2730399c03ff9e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
