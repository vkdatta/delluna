export const name="meal_lunch";
export const id="dl_8cd1f782703d32f1de10";
export const url=new URL("../icons/meal_lunch.svg?v=c8515a6da21ab3f25d29988249b88d8e90dbf6b5a05c381eb3cec82622f3c9fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
