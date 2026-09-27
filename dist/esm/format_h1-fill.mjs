export const name="format_h1-fill";
export const id="dl_f01ac64918bd976e7932";
export const url=new URL("../icons/format_h1-fill.svg?v=d79838b965ea4a17fad2a6ab5aacda9bd9f7f7a1593ffefe949386b9b8407bff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
