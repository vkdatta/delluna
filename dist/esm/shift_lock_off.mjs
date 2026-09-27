export const name="shift_lock_off";
export const id="dl_91ab4d085c4650e9f863";
export const url=new URL("../icons/shift_lock_off.svg?v=85c515e586845897725b091df7d00467ad1892101e7056188f6b45228b6df235",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
