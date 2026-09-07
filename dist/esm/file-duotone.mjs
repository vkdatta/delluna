export const name="file-duotone";
export const id="dl_dc46bff1bc2a4c8fb351";
export const url=new URL("../icons/file-duotone.svg?v=ddb6e4c20296785f4b6dac96536b49fe2d3d13998a26017bcf4eba9e4d554d05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
