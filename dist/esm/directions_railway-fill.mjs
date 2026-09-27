export const name="directions_railway-fill";
export const id="dl_eb050892f43124a4dd79";
export const url=new URL("../icons/directions_railway-fill.svg?v=6d36b62774caf03a122120d21fc3c8421394911a127c1e7994ae5fbf80c7e646",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
