export const name="meal_dinner-fill";
export const id="dl_dfe9a0fae9504bd89bd9";
export const url=new URL("../icons/meal_dinner-fill.svg?v=836e4aacc1a07092f2384f75a8b87466499da14903c8332b0c3e109b97b84f96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
