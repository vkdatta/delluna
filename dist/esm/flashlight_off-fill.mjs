export const name="flashlight_off-fill";
export const id="dl_a576f577e8150cbda467";
export const url=new URL("../icons/flashlight_off-fill.svg?v=6853aa7f397ee9e05520f1badbe8ec845ba18c45baa22873f1862d9beaefa058",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
