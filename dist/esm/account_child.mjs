export const name="account_child";
export const id="dl_173cd3523ff8d325c3d5";
export const url=new URL("../icons/account_child.svg?v=bb995b814b2bfe1b94f439a846906f5623d433233db8966a03fcb0758a58acc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
