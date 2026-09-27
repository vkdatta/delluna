export const name="emoji_food_beverage";
export const id="dl_1cbb0cd48d3e109ab194";
export const url=new URL("../icons/emoji_food_beverage.svg?v=bc3ab9656087e62aaab7cb073c6248c122a029829fd5948de5cf051f6ac143a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
