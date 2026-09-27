export const name="local_fire_department-fill";
export const id="dl_79df03fdaa70691ebce4";
export const url=new URL("../icons/local_fire_department-fill.svg?v=c3877de88a689eaf9c4966404b9de48131468168f92932f5d745142ed07284d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
