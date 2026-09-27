export const name="zoom_in_map-fill";
export const id="dl_3592e4bde33438a7dd91";
export const url=new URL("../icons/zoom_in_map-fill.svg?v=e7f813108e2378e5faf26b685f5658106725e8e1333d9eb7b143f9c04f09d892",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
