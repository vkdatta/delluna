export const name="crop-thin";
export const id="dl_104daecda46e4458bcc6";
export const url=new URL("../icons/crop-thin.svg?v=16a6e60e0774f9200e217481e8d2a1427311f4a2c7198bc1c9e3edbf9a0639e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
