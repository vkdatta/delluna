export const name="filter_alt_off-fill";
export const id="dl_d4b14b3ed9be3dc7c229";
export const url=new URL("../icons/filter_alt_off-fill.svg?v=cc5b6773186e287fbe6bc4a8dc8e853726f29fa6e5795b6bb0ee55292ca14d1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
