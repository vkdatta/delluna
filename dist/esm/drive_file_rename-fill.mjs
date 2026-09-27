export const name="drive_file_rename-fill";
export const id="dl_b4e564c956792438d4aa";
export const url=new URL("../icons/drive_file_rename-fill.svg?v=a8890f5ab89d2f66203f027cba951e3d279cac4bbb7313eb31cbe1dd6a26b613",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
