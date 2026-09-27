export const name="bookmarks-fill";
export const id="dl_00c0abd2d77b4a21b2f5";
export const url=new URL("../icons/bookmarks-fill.svg?v=37b015ce0126e4a193eaadf21d804f4a08ee429a1c701bce2033a22ab238cac9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
