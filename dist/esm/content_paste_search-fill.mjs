export const name="content_paste_search-fill";
export const id="dl_bafc59e5da1e924455f9";
export const url=new URL("../icons/content_paste_search-fill.svg?v=a7adaf35c4733ff49b96d97e5681d9979c0ac79de6db2c51604b469caff252f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
