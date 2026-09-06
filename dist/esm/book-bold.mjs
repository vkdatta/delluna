export const name="book-bold";
export const id="dl_46a301db5f2c4b17922f";
export const url=new URL("../icons/book-bold.svg?v=40d6e60b67cf6f47f0a5d41e5d238c206ba1cfe321f3d41f092bd47db47f75db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
