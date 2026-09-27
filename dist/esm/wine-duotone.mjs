export const name="wine-duotone";
export const id="dl_cb6156a37004c5347455";
export const url=new URL("../icons/wine-duotone.svg?v=ca8c4e9228d198257bc1598c734232efe7665e46528c2d637464e8bc82a43fc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
