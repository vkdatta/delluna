export const name="book_3-fill";
export const id="dl_0f302665e0b4c4c69f46";
export const url=new URL("../icons/book_3-fill.svg?v=724bf0b5e0e61b8168da560ec7a5f3b12a32ffbe84434a1ccb665a672ef734fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
