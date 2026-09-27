export const name="pizza-fill";
export const id="dl_80d7a06ee83b492c8750";
export const url=new URL("../icons/pizza-fill.svg?v=841efb03fad10a14b19e1dbbb6cbfe01387dfbb884d01be05f8f96860849b642",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
