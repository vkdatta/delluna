export const name="drive_folder_upload";
export const id="dl_47424f15ac696956884e";
export const url=new URL("../icons/drive_folder_upload.svg?v=041d0ed77cb1c038bc045727271fec5d300c229905664fd19c3146c5864e35b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
