export const name="books-bold";
export const id="dl_62e8831aef034400956c";
export const url=new URL("../icons/books-bold.svg?v=1b65f73bf0dc836effd4531266b6fe94fba8abb2416a3e7b322afed9259f243f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
