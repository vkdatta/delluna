export const name="file-pdf";
export const id="dl_44fb11d93aa0450abc8e";
export const url=new URL("../icons/file-pdf.svg?v=a8fb648659a7af4093f00b87a4f054e00da9ff0d2563ce598067a19057225a0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
