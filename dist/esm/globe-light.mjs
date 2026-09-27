export const name="globe-light";
export const id="dl_417744cf073e4d89a239";
export const url=new URL("../icons/globe-light.svg?v=777b649461dcee42eb3532904645a1f94238739dddc013d2d6f624cba312e926",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
