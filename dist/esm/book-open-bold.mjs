export const name="book-open-bold";
export const id="dl_f6bcc56343494b77aada";
export const url=new URL("../icons/book-open-bold.svg?v=650b120addbdb8de7513a79e8973799026acc23dcd375d4f3b0c01d2264902c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
