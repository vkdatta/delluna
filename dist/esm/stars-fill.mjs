export const name="stars-fill";
export const id="dl_5cbda425ccff1ac9e69a";
export const url=new URL("../icons/stars-fill.svg?v=895b591f5db0437a733ce81748d9c7f88b6c23a396fae32247bb0302443b65ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
