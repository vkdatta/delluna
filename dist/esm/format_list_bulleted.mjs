export const name="format_list_bulleted";
export const id="dl_8783f35ade830d420e5c";
export const url=new URL("../icons/format_list_bulleted.svg?v=0f3d3b43689a2719a67b046bf3a07fcad52ebccd6646f3f765e906e2336df139",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
