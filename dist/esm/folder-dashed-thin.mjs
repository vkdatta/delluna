export const name="folder-dashed-thin";
export const id="dl_509c7122c8024790a2f9";
export const url=new URL("../icons/folder-dashed-thin.svg?v=530f69b787608598b0c79ca3ad6c862b74f4c2c7caf421d83e8b5aec1abd8995",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
