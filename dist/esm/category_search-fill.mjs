export const name="category_search-fill";
export const id="dl_5b1a3ac16a59b4878ece";
export const url=new URL("../icons/category_search-fill.svg?v=97497246ac0bbca0333a041473728414149426e6a9e9745ee17facdf922c751a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
