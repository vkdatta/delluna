export const name="dress-fill";
export const id="dl_8d1590802a3d405c8ae9";
export const url=new URL("../icons/dress-fill.svg?v=31702e7632119f6a71f49dba7cce658828abcaa09cae065ac8189417a56abd58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
