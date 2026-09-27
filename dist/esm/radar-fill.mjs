export const name="radar-fill";
export const id="dl_7d00b3942c84ac0c2385";
export const url=new URL("../icons/radar-fill.svg?v=6dddb994e3d58f9360d511d34cb5cd8a5dfb968cbe3d6c2adaa821d092579c1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
