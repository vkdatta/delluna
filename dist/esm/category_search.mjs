export const name="category_search";
export const id="dl_2611a7bf18ca4dbebfb3";
export const url=new URL("../icons/category_search.svg?v=39d73cf60da4bc2bb8444aca1ebcbf817a36778c01bcda750512890250e6de34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
