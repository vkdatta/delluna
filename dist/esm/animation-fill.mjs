export const name="animation-fill";
export const id="dl_2808a0cbe0fb6f872826";
export const url=new URL("../icons/animation-fill.svg?v=21dfb758eec77270c6f91461d10a170e6034453b4e58b7c6553f51337fd4c67d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
