export const name="arrow_selector_tool";
export const id="dl_73103cda027b436d96ce";
export const url=new URL("../icons/arrow_selector_tool.svg?v=22337dd3e12e380bb89ae4efb3863d8c46278ea1f5224bb2fece83d020d97391",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
