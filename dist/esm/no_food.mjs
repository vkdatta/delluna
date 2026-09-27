export const name="no_food";
export const id="dl_cdb78f2f1cbfe92b53c3";
export const url=new URL("../icons/no_food.svg?v=18257d98ca019e00e17467b383b0d9031006d98fcf6db5c7eeb72da68aed4f4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
