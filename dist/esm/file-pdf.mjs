export const name="file-pdf";
export const id="dl_44fb11d93aa0450abc8e";
export const url=new URL("../icons/file-pdf.svg?v=d97fc442aaf108c946182c255c8bc275b8e8c33318ec8d3818d6eb38d4f96cbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
