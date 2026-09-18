export const name="set_meal-fill";
export const id="dl_47dd4cf961c144858c62";
export const url=new URL("../icons/set_meal-fill.svg?v=3686b3b6836fe41dacb7bfc4207371cd9c55d7890a426f5b3487b415ba89cbd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
