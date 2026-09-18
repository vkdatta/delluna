export const name="book_6";
export const id="dl_7f58ef5446954d41b09b";
export const url=new URL("../icons/book_6.svg?v=48a4dfb2a64e1c7c53f1d0391dd6f4d9f0f119bd812ce915f8caf53a254064b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
