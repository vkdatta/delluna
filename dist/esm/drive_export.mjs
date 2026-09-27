export const name="drive_export";
export const id="dl_d1ea4277487bf6f320ac";
export const url=new URL("../icons/drive_export.svg?v=73ed504ce181f5a5e3c6db72ae2d15d8b3dc75ead96a97471bf1f27a74b3a570",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
