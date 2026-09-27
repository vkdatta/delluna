export const name="create_new_folder";
export const id="dl_75404459d91bc8533ba6";
export const url=new URL("../icons/create_new_folder.svg?v=5113efff495f4ccd9de55a27c7157d583a05ee803b9b75b83ee074185678dd5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
