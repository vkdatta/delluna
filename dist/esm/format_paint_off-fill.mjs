export const name="format_paint_off-fill";
export const id="dl_8291860a1ecd4fdd45ba";
export const url=new URL("../icons/format_paint_off-fill.svg?v=dc3e7e4b95ad1e8d23b7be82270383c27edf89fa8cc9afb6cb18e2a95810ea96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
