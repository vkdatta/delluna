export const name="bookmarks-simple-duotone";
export const id="dl_4d358231142c4e078680";
export const url=new URL("../icons/bookmarks-simple-duotone.svg?v=4a79c65c7b4786d21e574477f933e7eeb32c872e3d419e969aaf1cf761883da3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
