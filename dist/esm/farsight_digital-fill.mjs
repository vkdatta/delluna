export const name="farsight_digital-fill";
export const id="dl_c13c175d8e496dd29e0f";
export const url=new URL("../icons/farsight_digital-fill.svg?v=f6d4196be0a4561015de51273b048cefb066368d189b421dab5767ba8af62483",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
