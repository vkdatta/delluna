export const name="emoji_food_beverage";
export const id="dl_b08a5684779f3dbc0a96";
export const url=new URL("../icons/emoji_food_beverage.svg?v=5371de826eca48e0a9a4566302e28914d3f120045c1beb7105594b88477745de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
