export const name="book-open-user-fill";
export const id="dl_0ecea526da324ec7adeb";
export const url=new URL("../icons/book-open-user-fill.svg?v=19cf19c5c005a44a43d79f84cef26051d936fbca1216957cfb4f663a4815c3ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
