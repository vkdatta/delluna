export const name="folder_info-fill";
export const id="dl_2e95cda9e0a2423f94db";
export const url=new URL("../icons/folder_info-fill.svg?v=7ccb51a844e4f572bfd50993a250e98d9a53e7cd035b99ff04cf6b0f63fd20ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
