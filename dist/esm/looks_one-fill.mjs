export const name="looks_one-fill";
export const id="dl_d74deedcdb82c1131b77";
export const url=new URL("../icons/looks_one-fill.svg?v=132e938baf0a0955e5ea4bc93a9aed6189d079144b838f8fdd9342d3e38881a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
