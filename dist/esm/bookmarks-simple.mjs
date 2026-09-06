export const name="bookmarks-simple";
export const id="dl_02a1e7904dbf4036ba03";
export const url=new URL("../icons/bookmarks-simple.svg?v=f1286904bc8fb44e198a5224593df9e6b304f3712bc41427fad9483c1fcc7603",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
