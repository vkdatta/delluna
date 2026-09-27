export const name="file-doc-fill";
export const id="dl_62dbf900275f464d9ca9";
export const url=new URL("../icons/file-doc-fill.svg?v=ec5c11f16ac681973c2bddcad584c17b40ce4a14cd71ef8cc8e210eaf0453154",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
