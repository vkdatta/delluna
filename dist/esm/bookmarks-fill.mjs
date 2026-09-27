export const name="bookmarks-fill";
export const id="dl_00c0abd2d77b4a21b2f5";
export const url=new URL("../icons/bookmarks-fill.svg?v=f2c29ce31a5e5ea57b2020f52529697bd70b8568d05331e3fce20ad5eee6752e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
