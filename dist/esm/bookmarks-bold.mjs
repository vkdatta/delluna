export const name="bookmarks-bold";
export const id="dl_1c2ae6136d7f4e6da953";
export const url=new URL("../icons/bookmarks-bold.svg?v=8d7dc0971a2a833b64fa4639d591d974f7764d19a102a2aa863d2f6416bb7476",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
