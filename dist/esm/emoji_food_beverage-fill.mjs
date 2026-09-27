export const name="emoji_food_beverage-fill";
export const id="dl_834b4fb9b2f7bc4a2fa2";
export const url=new URL("../icons/emoji_food_beverage-fill.svg?v=0de8c8f3fade1564651d6482883255f7cf6fc711f3381fb15d724ebf5f82f281",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
