export const name="workspaces-fill";
export const id="dl_c17553cff7df4deb816e";
export const url=new URL("../icons/workspaces-fill.svg?v=944ec7fc183391d3cd289cc1fd444995fd95807a74e3370ee454119aa649231e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
