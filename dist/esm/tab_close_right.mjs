export const name="tab_close_right";
export const id="dl_4abd75b2e0b284f1c978";
export const url=new URL("../icons/tab_close_right.svg?v=869b419fa64154050716cf15e4e7323761eb33ad61e21f556f8dc243a234432a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
