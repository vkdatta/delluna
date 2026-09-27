export const name="drive_file_rename-fill";
export const id="dl_20291553f420d15bfd9d";
export const url=new URL("../icons/drive_file_rename-fill.svg?v=dc4e9effcb4dad560ce576bb0cb7d51bd560193b4735df532eb23890cc1be176",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
