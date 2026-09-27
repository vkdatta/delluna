export const name="stethoscope_check-fill";
export const id="dl_d1c969e91e2ef695be97";
export const url=new URL("../icons/stethoscope_check-fill.svg?v=92074aeed99458247d3debc83d3075d9045317c20feba0ccbc6df2830d25c29a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
