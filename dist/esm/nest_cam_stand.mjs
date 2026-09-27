export const name="nest_cam_stand";
export const id="dl_dbb8a4ff8449529e4a64";
export const url=new URL("../icons/nest_cam_stand.svg?v=b6a067391aa633c7f643c4395f190179a7d76a6fb5a3c3cc037dbe341c953326",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
