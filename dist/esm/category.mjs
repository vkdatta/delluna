export const name="category";
export const id="dl_844a1a37c87331208b82";
export const url=new URL("../icons/category.svg?v=9e04832bf3cd9ee77dd522571ef0c9daf4e1f51b42eaac45e0371fb5d209aad2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
