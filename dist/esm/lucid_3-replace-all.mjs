export const name="lucid_3-replace-all";
export const id="dl_679ad55e35ba436a9015";
export const url=new URL("../icons/lucid_3-replace-all.svg?v=5842fb319282e066e2565c30b6374a22ecf041254506c464d27a01eac74a41cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
