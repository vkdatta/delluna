export const name="read_more-fill";
export const id="dl_090b2214ac4847b8a8c4";
export const url=new URL("../icons/R/read_more-fill.svg?v=908ec836ffd7a05286970df55c3d7fa7f5ebae41fbb400180c5a2b97bbb332fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
