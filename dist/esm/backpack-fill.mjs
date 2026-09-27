export const name="backpack-fill";
export const id="dl_0c052ccb96be4f8881d6";
export const url=new URL("../icons/backpack-fill.svg?v=66eccdfac79e4c7750b61cf29424391e019029cf64d5197d0a900a249538a631",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
