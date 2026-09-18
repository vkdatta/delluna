export const name="calendar_add_on";
export const id="dl_bce46ce6ce9440dea077";
export const url=new URL("../icons/calendar_add_on.svg?v=98fb3223257897fd799163a83ec1effcef14d284a873434cb1bed4c3f747cf22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
