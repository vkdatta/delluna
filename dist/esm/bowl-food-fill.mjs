export const name="bowl-food-fill";
export const id="dl_32d034d71a474c548016";
export const url=new URL("../icons/bowl-food-fill.svg?v=23c7d9aaaf4684e5f542f688036efaa457b8c988587a5644c2adaa977e397ea8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
