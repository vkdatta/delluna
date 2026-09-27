export const name="bookmarks-simple-bold";
export const id="dl_ae0dc2924635478bad2b";
export const url=new URL("../icons/bookmarks-simple-bold.svg?v=0be1a6ba321a531ef8a35e2d6c7c32499c47e1dc230dc1e2eeeec2c7a5f19f8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
