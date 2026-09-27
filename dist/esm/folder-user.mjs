export const name="folder-user";
export const id="dl_c50614cb386f4174917c";
export const url=new URL("../icons/folder-user.svg?v=9e548c0d61e986ff05bf5cf5ec809ff5d111fd7256976dafb4e69ff3b278051e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
