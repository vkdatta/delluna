export const name="folder_supervised-fill";
export const id="dl_663cce9e21bc9de330f1";
export const url=new URL("../icons/folder_supervised-fill.svg?v=c4b5a0e30c23404c93fba9a946aca93519a3a11762796180fa5dc62d19a9e0d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
