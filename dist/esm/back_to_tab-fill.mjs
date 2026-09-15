export const name="back_to_tab-fill";
export const id="dl_d2af2bd0e0674b02afe4";
export const url=new URL("../icons/B/back_to_tab-fill.svg?v=0c0692da1b91d8c91e63f7aee63a42b00ec0577fdfda7b2d3f04cb242aac4caf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
