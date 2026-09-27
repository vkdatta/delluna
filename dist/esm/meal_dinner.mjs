export const name="meal_dinner";
export const id="dl_0e97fe3ef0b92c79d527";
export const url=new URL("../icons/meal_dinner.svg?v=c1cd22e7ab2639c2c328a107af873df36a133e243b92be5f2a688bd1f9eeaf33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
