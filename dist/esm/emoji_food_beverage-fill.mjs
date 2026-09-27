export const name="emoji_food_beverage-fill";
export const id="dl_03e0f5dea93749a48e1c";
export const url=new URL("../icons/emoji_food_beverage-fill.svg?v=c6fe6a9a9c2c22a62321cd66826d6b9a31e78a263862460ee84b6297ebdb75f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
