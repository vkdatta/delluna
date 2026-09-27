export const name="folder_open-fill";
export const id="dl_f80b5e09bd33461baa96";
export const url=new URL("../icons/folder_open-fill.svg?v=b71ef2dc6293156e7090dd1592a5b9da08d9b5aae6566828b15f723354c9c3f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
