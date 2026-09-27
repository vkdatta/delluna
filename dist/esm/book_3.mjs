export const name="book_3";
export const id="dl_7a925ce490f0ea121b81";
export const url=new URL("../icons/book_3.svg?v=c7f497d0295ee238ba6d74bc21fbc9dedb272f8e8e74ebc066f6e83cc334d671",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
