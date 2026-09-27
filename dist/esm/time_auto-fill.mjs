export const name="time_auto-fill";
export const id="dl_ecf8e360ff9414cf43b3";
export const url=new URL("../icons/time_auto-fill.svg?v=14f6db145a3bea750c94facc1aaa31cf358d8464db374e3f1ae250bac40dbf00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
