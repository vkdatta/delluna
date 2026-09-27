export const name="add_to_drive";
export const id="dl_43416397901eed6ac8ea";
export const url=new URL("../icons/add_to_drive.svg?v=30949b425bc8b37a84a747e9128bc2c0bf18a6b08434e8b7afc224b21f236d1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
