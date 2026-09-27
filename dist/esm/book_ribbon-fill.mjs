export const name="book_ribbon-fill";
export const id="dl_2493e04dbaf71abd6c49";
export const url=new URL("../icons/book_ribbon-fill.svg?v=2cbfd7106a2077bfc7e44fbab007a6ef7029e7cad204b3331ec6314db4b1424a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
