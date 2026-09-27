export const name="search_activity-fill";
export const id="dl_463fa5c628b2b84ad5dd";
export const url=new URL("../icons/search_activity-fill.svg?v=e145e01477d8730b7b27e1ad5dad35116c45ad8ca853fb15d57a8135da956a0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
