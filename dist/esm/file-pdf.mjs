export const name="file-pdf";
export const id="dl_44fb11d93aa0450abc8e";
export const url=new URL("../icons/file-pdf.svg?v=0581ef1136f08a6ea9770e2e11a478576031d432ab736fbdc2f6fe3fd9d7019a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
