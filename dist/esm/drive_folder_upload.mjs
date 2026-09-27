export const name="drive_folder_upload";
export const id="dl_c7e23cc5d2b651054261";
export const url=new URL("../icons/drive_folder_upload.svg?v=0ad8e31a691354b84dd7da44ec79fab1634461cab5e45e8a396fc92ac5c958cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
