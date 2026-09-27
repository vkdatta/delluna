export const name="book-bold";
export const id="dl_46a301db5f2c4b17922f";
export const url=new URL("../icons/book-bold.svg?v=4b5a33f5db1e3e262d9940b72259a5a90e773135b2c12f1a7eaec8cc3ffce93a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
