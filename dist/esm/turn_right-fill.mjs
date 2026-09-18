export const name="turn_right-fill";
export const id="dl_050f1a5369454b33a404";
export const url=new URL("../icons/turn_right-fill.svg?v=3f41fc27cdfc0f8653df726aee1cb7b7dca2b08ddba98480071f1e82ed9877c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
