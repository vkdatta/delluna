export const name="crop_7_5-fill";
export const id="dl_c1d3f932e7d44f3e982d";
export const url=new URL("../icons/C/crop_7_5-fill.svg?v=eb82ca9b9f9562cc9ac26ffdec1a8173a4a86cb13a2ad0019d28dabc13737903",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
