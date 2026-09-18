export const name="book_ribbon-fill";
export const id="dl_a4b077b9d69543af9fff";
export const url=new URL("../icons/book_ribbon-fill.svg?v=89b0df2faca5d6c63990b6345aab342e2043824685af31c83098b575b8c82ee3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
