export const name="emoji_food_beverage";
export const id="dl_d7f958d0ce154742a976";
export const url=new URL("../icons/emoji_food_beverage.svg?v=c59e4f92dea3b2fa3d300bdcc38d1e2f5068111b623c92d75bb99060fb739ac3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
