export const name="videocam_alert-fill";
export const id="dl_f3ccb8dc992652390f8c";
export const url=new URL("../icons/videocam_alert-fill.svg?v=6bd43aa2ec844dd01b4530e7b52bd5122d4c22f1812707f83e6e2d1bf3e10b38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
