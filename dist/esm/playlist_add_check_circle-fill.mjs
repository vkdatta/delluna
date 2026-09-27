export const name="playlist_add_check_circle-fill";
export const id="dl_b8ccc891c72dceea76d9";
export const url=new URL("../icons/playlist_add_check_circle-fill.svg?v=6ea46302bc05d596fee796c49db9efd7a97f8f8727f06c495d012c14c65462a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
