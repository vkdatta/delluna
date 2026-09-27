export const name="folder_shared";
export const id="dl_009c049bd26ee5f93c07";
export const url=new URL("../icons/folder_shared.svg?v=23d6be62bb16f9e1663803877d648e8df6bc0e61ac2f763d556ea1f1b0a22294",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
