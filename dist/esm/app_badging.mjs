export const name="app_badging";
export const id="dl_d54b227291efd6aa8689";
export const url=new URL("../icons/app_badging.svg?v=35b50335884ce35ed9dda36f10bf00cf40454c5af19b27b3d7fbbbd68d7b3d7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
