export const name="book_3-fill";
export const id="dl_c91b57bd139f4fe5840b";
export const url=new URL("../icons/book_3-fill.svg?v=c48e3bc7a5d0bc597b5e716cac417122e62ea2f221a23528a4a3793ece1116b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
