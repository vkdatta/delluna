export const name="bookmarks";
export const id="dl_858088bf514b44faac82";
export const url=new URL("../icons/bookmarks.svg?v=d738ea0dea6e0e49a7c26c514b7f096423636548297246c9b9865117a04efd31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
