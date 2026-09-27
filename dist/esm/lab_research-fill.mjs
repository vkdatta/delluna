export const name="lab_research-fill";
export const id="dl_0c5e2efb4b5f5d8ea39c";
export const url=new URL("../icons/lab_research-fill.svg?v=ebac5513b98617890ce746daec64dcce46d8c7224f1417c565e42b5be3e315c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
