export const name="ev_shadow_add";
export const id="dl_3fe9ba22905f8175e08b";
export const url=new URL("../icons/ev_shadow_add.svg?v=d434f830fa05ee858b1df547926933fe5c29a993b8c99d98c6ae292b2430c78d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
