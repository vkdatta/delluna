export const name="meal_lunch";
export const id="dl_1754c61b087ee5759b45";
export const url=new URL("../icons/meal_lunch.svg?v=de9b00a0d999c10c8d8f19fb7eadbc31e0b3629707f7cdd2c6519029632fb3cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
