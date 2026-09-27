export const name="menu_book_2-fill";
export const id="dl_d2354de8a3666d01589c";
export const url=new URL("../icons/menu_book_2-fill.svg?v=2d2bbcd29c0341bfaf031c98217b792a1bf8aa8f2570fcaa0648ad7e8e7f0c17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
