export const name="drive_file_rename";
export const id="dl_074948275af3d952578b";
export const url=new URL("../icons/drive_file_rename.svg?v=6b1e6e75a8d7bb9494e1cdb1a94f7676e079fa1e3751e18b1591a554908e7210",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
