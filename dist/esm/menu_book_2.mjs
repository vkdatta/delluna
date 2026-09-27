export const name="menu_book_2";
export const id="dl_5966cb45639ab725076d";
export const url=new URL("../icons/menu_book_2.svg?v=7736fca18c09550d1ac93e4f93f3655fc4558e0dfd7212ed6932aa78885fad31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
