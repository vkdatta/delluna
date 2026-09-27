export const name="folder_managed-fill";
export const id="dl_7b3daebd7d8e950ccfa2";
export const url=new URL("../icons/folder_managed-fill.svg?v=611b327a34d0f20fb31440b259c95cba0c9265068abb62315c49df7bf0ee14e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
