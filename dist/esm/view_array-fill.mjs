export const name="view_array-fill";
export const id="dl_f4d6c1ef0be8f22e8d67";
export const url=new URL("../icons/view_array-fill.svg?v=40f573e5c207d9d1ce5768c2781c488a17d92525e5e05d85e67521dd8b2f151c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
