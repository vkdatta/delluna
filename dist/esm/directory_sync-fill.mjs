export const name="directory_sync-fill";
export const id="dl_ef6eab0bdcdb5d35fe9e";
export const url=new URL("../icons/directory_sync-fill.svg?v=9724039f3eb765ad3635c6b1bfe6707bdaa42efbb1c728a1335d0003c8715d44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
