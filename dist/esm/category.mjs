export const name="category";
export const id="dl_844a1a37c87331208b82";
export const url=new URL("../icons/category.svg?v=1cc9818819dc5a89f863d0600de48d29f130d152553ca12d2b6783f0edb5ce16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
