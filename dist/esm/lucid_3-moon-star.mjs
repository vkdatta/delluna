export const name="lucid_3-moon-star";
export const id="dl_e8108b90f36b4802a2fb";
export const url=new URL("../icons/lucid_3-moon-star.svg?v=f3d959de92772cf9631ba31623c9d7dee730cb2400609c6f9012df43421cd92d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
