export const name="format_image_right";
export const id="dl_08d4fdb9ef4c4439b727";
export const url=new URL("../icons/format_image_right.svg?v=66a0af26ce9d47c8c62daa756b5a703ed564b8d0c154f172aa3b1ed03d946621",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
