export const name="emoji_food_beverage";
export const id="dl_01a8e7b4fb0c4f7aacab";
export const url=new URL("../icons/emoji_food_beverage.svg?v=fcc546d13e00850c3cc408adf72b6818b1216f0451d416bb2584c09459fb46f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
