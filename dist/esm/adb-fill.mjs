export const name="adb-fill";
export const id="dl_f445a2d3afcea719ba35";
export const url=new URL("../icons/adb-fill.svg?v=7e3302f68d37605a9eee28b5fb87c696d9030c6f676f8f849ef86278750b3cf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
