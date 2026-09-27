export const name="folder-minus-duotone";
export const id="dl_e6a2d9fa3bc348dda031";
export const url=new URL("../icons/folder-minus-duotone.svg?v=a8da1fc7df2c097c55f3ca1294e3fc1a5d68d0906cb398b97183b2cd7309fb1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
