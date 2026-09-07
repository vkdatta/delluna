export const name="shopping-bag-fill";
export const id="dl_125400c2c19b41af8885";
export const url=new URL("../icons/S/shopping-bag-fill.svg?v=3625cfab5daaf82fb0b48d148ea87b4627c371fbea3360c59061fae37685e2c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
