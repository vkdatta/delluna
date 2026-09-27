export const name="control_point_duplicate-fill";
export const id="dl_01a35234df59b6d6f1ee";
export const url=new URL("../icons/control_point_duplicate-fill.svg?v=ed306ab801282441526de218d3fb325c16d78f1b60ca719029ed05efaf78c70b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
