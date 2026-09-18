export const name="menu_book";
export const id="dl_2f40cd25cd624ab39d06";
export const url=new URL("../icons/menu_book.svg?v=df756112272b4714757539ae8ec4160e32b71fafe771874bbc3713b14375ffe6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
