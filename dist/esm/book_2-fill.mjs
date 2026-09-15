export const name="book_2-fill";
export const id="dl_542bb8310bb84f4fa2f7";
export const url=new URL("../icons/B/book_2-fill.svg?v=900c24e8e14e2ecb1bf037f0edb91645aacfd8402a4a6ec7686796bee1ffa0f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
