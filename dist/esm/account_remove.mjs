export const name="account_remove";
export const id="dl_4f2ce7235b23d8d9f351";
export const url=new URL("../icons/account_remove.svg?v=da75e31a23b137ae20a303ce59e7581fbb712101b4ef85f2648cd31417b8e22d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
