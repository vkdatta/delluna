export const name="aod_watch-fill";
export const id="dl_366b945c381e03e3cace";
export const url=new URL("../icons/aod_watch-fill.svg?v=9ac75d30bb63d26eb1fa85856e3add9000ec48728632156557223ca85749b8d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
