export const name="books-light";
export const id="dl_2b44a6e91a9240a8862d";
export const url=new URL("../icons/books-light.svg?v=47e2fdf9f97302ff95d70a090e719951c836a03dd1f3a38960a72de87319cd5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
