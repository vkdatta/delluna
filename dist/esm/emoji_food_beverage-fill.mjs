export const name="emoji_food_beverage-fill";
export const id="dl_3e674719ab8744aea736";
export const url=new URL("../icons/emoji_food_beverage-fill.svg?v=c5885df423bd84d65c05758ce2062fdfe9939ea273d5b3544bb6dec1f85f77c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
