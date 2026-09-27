export const name="near_me_disabled-fill";
export const id="dl_742a29b9c3c58ef40764";
export const url=new URL("../icons/near_me_disabled-fill.svg?v=7f9eab696a6b2530395c2ac3a866b854ea28bea4d1453fa99e593fdf4670851d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
