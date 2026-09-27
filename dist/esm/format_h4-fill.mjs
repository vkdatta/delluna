export const name="format_h4-fill";
export const id="dl_b1e5d3292541c5a1bdbe";
export const url=new URL("../icons/format_h4-fill.svg?v=49dc9413be4a3cd8fdd12b937b25f01f020078771284d9eec3c990f881f8b9c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
