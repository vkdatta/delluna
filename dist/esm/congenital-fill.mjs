export const name="congenital-fill";
export const id="dl_17bc2cc80556f705095e";
export const url=new URL("../icons/congenital-fill.svg?v=cefb3eaf5bca87c06bd01d98417ce7fd649679e64628b6c833f107469812c172",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
