export const name="drive_folder_upload-fill";
export const id="dl_8872a0ae220dc59d04e7";
export const url=new URL("../icons/drive_folder_upload-fill.svg?v=6a481e1abf3a80b8ec3ab92f3e91a4af0c3e5bb32889f794ce4852ea59e96b78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
