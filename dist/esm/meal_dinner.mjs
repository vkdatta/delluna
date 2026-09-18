export const name="meal_dinner";
export const id="dl_09a4e5b8c70e4b43ab24";
export const url=new URL("../icons/M/meal_dinner.svg?v=3d5a5b8ab5d6a9755c6babd2de444f3721cedfde3dde65e9f17e793cd22a623f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
