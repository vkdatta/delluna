export const name="file-doc-fill";
export const id="dl_62dbf900275f464d9ca9";
export const url=new URL("../icons/file-doc-fill.svg?v=a28f9f8711b16fda659ebc380825b82b6f579c4680b0d8c145130ae728cd6408",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
