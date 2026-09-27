export const name="lucid_1-calendar-search";
export const id="dl_4b003cb0bbf04306bb41";
export const url=new URL("../icons/lucid_1-calendar-search.svg?v=6d07377dd6af17fc48a8533b4f57663f66828a026f4271ff6660741a434950e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
