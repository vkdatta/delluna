export const name="add_column_right";
export const id="dl_58857f34ee1d3f95282e";
export const url=new URL("../icons/add_column_right.svg?v=f043c2042fde24931c1b2b1f35c89f4e6011f3043f2c59fca5e9a586e4b485dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
