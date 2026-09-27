export const name="food_bank-fill";
export const id="dl_12967dcc5501224044b6";
export const url=new URL("../icons/food_bank-fill.svg?v=9cd85abab33ef2727aa88e22ae1e53cb2f08a629fd1654f32bef11a5a04d4700",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
