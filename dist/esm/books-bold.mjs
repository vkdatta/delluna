export const name="books-bold";
export const id="dl_62e8831aef034400956c";
export const url=new URL("../icons/books-bold.svg?v=a39a2c6caf6f33374b03b6ad12d971b5f111688ebf9c36a3063dffcdfe97fac3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
