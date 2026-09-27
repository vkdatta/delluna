export const name="ev_shadow_add-fill";
export const id="dl_41715f8a838d078bdea9";
export const url=new URL("../icons/ev_shadow_add-fill.svg?v=ec1391bcef46e4939c11d6d1bb089b03604380f7a2cc245bdbb6e5d1fc5c32ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
