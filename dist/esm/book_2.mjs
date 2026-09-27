export const name="book_2";
export const id="dl_6c1bf869e43477c0f8a6";
export const url=new URL("../icons/book_2.svg?v=9a18e0033492e0e66ae349c265d56d95eccf3e45da0af7e357a4beca1047c8f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
