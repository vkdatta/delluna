export const name="upload_file-fill";
export const id="dl_e683419dd62ea6a90467";
export const url=new URL("../icons/upload_file-fill.svg?v=e900af6a8753ce2e4227842efda93451fd65a989891a85fa90fd05f101b0aed2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
