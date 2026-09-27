export const name="restaurant-fill";
export const id="dl_463c17790f619b6e1a0e";
export const url=new URL("../icons/restaurant-fill.svg?v=d74121b2809610270ea9c096cd25557f143a97341fce99b8e1b816ff12fd057e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
