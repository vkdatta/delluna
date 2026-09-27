export const name="hearing-fill";
export const id="dl_bc8cf19e7145e5bcdae6";
export const url=new URL("../icons/hearing-fill.svg?v=451da0e7716c992572954c28c08670a8ed94adcc3847b385b9cc22fe6f2123f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
