export const name="globe_book-fill";
export const id="dl_bd268b79c69bafab5fa6";
export const url=new URL("../icons/globe_book-fill.svg?v=f998e985c1aea3e6ca8be570be3de74f98c28007f5fe70c36a03726ef81d1939",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
