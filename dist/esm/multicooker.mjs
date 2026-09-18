export const name="multicooker";
export const id="dl_2f58354548c5496e9347";
export const url=new URL("../icons/multicooker.svg?v=7a19d2cb5a748e8db13c6316801b46405277a6edabb34f2494b2b79156b8958a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
