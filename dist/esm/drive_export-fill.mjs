export const name="drive_export-fill";
export const id="dl_4ee40650f79242471584";
export const url=new URL("../icons/drive_export-fill.svg?v=180a758b34287e5240d136a16a3070f923be5d5b9bae6b92271dba77479e76e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
