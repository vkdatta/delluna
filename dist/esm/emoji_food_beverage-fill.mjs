export const name="emoji_food_beverage-fill";
export const id="dl_30b4bd79e61f84073bf2";
export const url=new URL("../icons/emoji_food_beverage-fill.svg?v=09c31a3964aa5e2b49e507bec23e12c640fcdf6a9c089f8308a6f95e463ef94d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
