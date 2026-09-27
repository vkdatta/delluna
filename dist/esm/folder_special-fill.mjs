export const name="folder_special-fill";
export const id="dl_c3eba9835fa10de26360";
export const url=new URL("../icons/folder_special-fill.svg?v=393a0a6bbc3e938a2fb3432789e0a130dcd288181c51da37d529b8678c7e548c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
