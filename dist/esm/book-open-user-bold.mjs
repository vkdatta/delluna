export const name="book-open-user-bold";
export const id="dl_12e3803f162242fc9329";
export const url=new URL("../icons/book-open-user-bold.svg?v=32b8bac30f5ab024af7c22f4f2bc2a42ed276f7bbd3647b6cd4b541b3e02d2d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
