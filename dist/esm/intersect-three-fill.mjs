export const name="intersect-three-fill";
export const id="dl_39866194247f48b99d34";
export const url=new URL("../icons/intersect-three-fill.svg?v=42e6d51012229041e58928d3f50918aa3f45ca9c2a98a804799e3768a13f43c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
