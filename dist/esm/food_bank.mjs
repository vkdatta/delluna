export const name="food_bank";
export const id="dl_57a412e2fe5f4dd1a155";
export const url=new URL("../icons/food_bank.svg?v=498feac4dc6d9967587a84b8bc19c90a1e6aa2fb178b82402a6fa93c07d0aa20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
