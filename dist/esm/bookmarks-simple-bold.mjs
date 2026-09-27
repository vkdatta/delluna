export const name="bookmarks-simple-bold";
export const id="dl_ae0dc2924635478bad2b";
export const url=new URL("../icons/bookmarks-simple-bold.svg?v=d240878b43c3b82695841c2030da91261fc75edb11288148f16f8af57ad67991",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
