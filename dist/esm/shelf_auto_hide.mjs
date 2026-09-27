export const name="shelf_auto_hide";
export const id="dl_db1c540f6f25f1d6b923";
export const url=new URL("../icons/shelf_auto_hide.svg?v=52429cd364cd388b155b9828c4a835ea896410f3ef746a4f7486492cb62ea955",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
