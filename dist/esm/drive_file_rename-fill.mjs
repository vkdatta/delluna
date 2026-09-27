export const name="drive_file_rename-fill";
export const id="dl_145d8b07f9fe5a384bcb";
export const url=new URL("../icons/drive_file_rename-fill.svg?v=e13f282dde4351efd094c952022f9149c07737e2829f94d686376389414ec67d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
