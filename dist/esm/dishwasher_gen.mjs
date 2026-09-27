export const name="dishwasher_gen";
export const id="dl_2dfe4e110748f5d19340";
export const url=new URL("../icons/dishwasher_gen.svg?v=4bd1319ecc1815cab44903b2c00220df93486cd8bd4621b14ccc33680f03cdcb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
