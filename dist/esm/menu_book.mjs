export const name="menu_book";
export const id="dl_11c20af371cbd7cb93a1";
export const url=new URL("../icons/menu_book.svg?v=5d78546b3c422228c3e23f45bbabe1111bf5d9941264b89b0ab84363240ef8fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
