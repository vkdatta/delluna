export const name="two_wheeler-fill";
export const id="dl_205b3f1e021834055c6a";
export const url=new URL("../icons/two_wheeler-fill.svg?v=51a51c7d443cc151628021702384748b04e9a474022380944d1e7dbabf923326",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
