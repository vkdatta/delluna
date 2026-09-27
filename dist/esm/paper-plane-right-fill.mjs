export const name="paper-plane-right-fill";
export const id="dl_44b8fc229ada4cc2b865";
export const url=new URL("../icons/paper-plane-right-fill.svg?v=bbe0a2498bbceb05916108904116086cb4cc329155f389eb78f3c197577d2dcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
