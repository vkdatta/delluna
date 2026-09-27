export const name="rebase_edit-fill";
export const id="dl_ca84c1ebd3435155a1ec";
export const url=new URL("../icons/rebase_edit-fill.svg?v=e7e5b1ab244b8b70401f2fcd0a8b7525a2b4b8651992919bb1c7ff0ac4a3d478",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
