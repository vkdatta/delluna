export const name="x-circle-duotone";
export const id="dl_48ef2c3fcb9e10b0ed4c";
export const url=new URL("../icons/x-circle-duotone.svg?v=38c0d6ac1117009ddb3a43b7533c951daa12fd22b5050b28b0c8e9ed503eb774",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
