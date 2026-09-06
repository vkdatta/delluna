export const name="file-doc-fill";
export const id="dl_62dbf900275f464d9ca9";
export const url=new URL("../icons/file-doc-fill.svg?v=48c096801a7fa7ee393094e0020b578b6c9c5b050fe20fcb7c91259460b9d74e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
