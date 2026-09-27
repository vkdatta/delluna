export const name="user-plus-duotone";
export const id="dl_9a6b9309a8b610739ab3";
export const url=new URL("../icons/user-plus-duotone.svg?v=59b8a36b1ae2a58987088c5dec276b8a4f17a966f6a5dc43c3de32a9c3b992ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
