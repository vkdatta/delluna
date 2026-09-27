export const name="edit_road-fill";
export const id="dl_e24162b174ccc1536328";
export const url=new URL("../icons/edit_road-fill.svg?v=ea14dc040fc3c2a2a10fc3ec8db9fa6170652e85aaf4c2670d3865fa55542f31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
