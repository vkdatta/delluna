export const name="ramen_dining-fill";
export const id="dl_258a9b9072794214bc86";
export const url=new URL("../icons/R/ramen_dining-fill.svg?v=20123ab60e848436e5351c4a32a7034128e71042f086814c64169589d1a3479f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
