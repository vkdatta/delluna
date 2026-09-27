export const name="inventory_2";
export const id="dl_85f922f2876161329e8e";
export const url=new URL("../icons/inventory_2.svg?v=55051583cc55c203e4da8c496a01ad3debfe9970cd40fd12c1d261993ad03be1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
