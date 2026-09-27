export const name="bookmark_manager-fill";
export const id="dl_f260a74740df99f114f6";
export const url=new URL("../icons/bookmark_manager-fill.svg?v=39a75145de41129791ff3de296b331f77969bfe701d21d464eea95a4bf29ecc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
