export const name="bookmark_check-fill";
export const id="dl_a3143cf1e4c0bc91cde7";
export const url=new URL("../icons/bookmark_check-fill.svg?v=0528ef557518aad3dbf2c04de585480d945c921d599ed241a6c8c813f42ec167",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
