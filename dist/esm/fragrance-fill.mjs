export const name="fragrance-fill";
export const id="dl_fe55a166b238b5357baf";
export const url=new URL("../icons/fragrance-fill.svg?v=3200429ecbc931aec9d1ceb54a05041b744851407b8a29553fb0b78f47475934",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
