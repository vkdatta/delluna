export const name="calendar-plus-fill";
export const id="dl_ba102680c8f244a88aee";
export const url=new URL("../icons/calendar-plus-fill.svg?v=b6175449c9e6a2589f754e1a8bcb198be4fef7fb03138e294b03d1bfaa8f0040",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
