export const name="upload_file-fill";
export const id="dl_e5c6376e87b40ce13013";
export const url=new URL("../icons/upload_file-fill.svg?v=197f7c7c70927be0a609b550ba2d90a1d9980e3ec4e4bc4b8384520f3b60a614",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
