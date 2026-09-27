export const name="file-arrow-down";
export const id="dl_9a4765c2d4454bea866b";
export const url=new URL("../icons/file-arrow-down.svg?v=2d74df2d0e4ba40658cee8033d22ea72d56252f6359338e5025c2374a868e53c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
