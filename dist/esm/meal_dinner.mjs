export const name="meal_dinner";
export const id="dl_18dac3abf33f58db29c4";
export const url=new URL("../icons/meal_dinner.svg?v=c2cd256fc6fe7ffb7d7737af3af4049a52bdecf1b7a64ec9950dee0e3bfb26f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
