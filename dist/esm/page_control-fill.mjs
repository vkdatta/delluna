export const name="page_control-fill";
export const id="dl_bb84c6760043f9bfae48";
export const url=new URL("../icons/page_control-fill.svg?v=34e3f1465ce742eeee20993343f05c3b18445c026a276d419eed622966b5b3c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
