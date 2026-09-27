export const name="download-simple-duotone";
export const id="dl_c5e2af5fbee34c659bb3";
export const url=new URL("../icons/download-simple-duotone.svg?v=7a43f00cfc5207035b65133d579c8600f39b74df84328a0ade11546f307f4e8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
