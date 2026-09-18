export const name="drive_file_rename-fill";
export const id="dl_ceee44562e41479d95c0";
export const url=new URL("../icons/drive_file_rename-fill.svg?v=c99f93f8cf5aea03268e9504fd3211c0d144deae0b74a442ca7d501c20c0eed9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
