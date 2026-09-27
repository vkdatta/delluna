export const name="bookmarks-simple";
export const id="dl_02a1e7904dbf4036ba03";
export const url=new URL("../icons/bookmarks-simple.svg?v=7a08509e9aa66a29a1b1fce07dc4446a3d870e3a634387e425d9f64c6bc0dff1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
