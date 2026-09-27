export const name="thumbnail_bar";
export const id="dl_cdd0f5e20330599a9be8";
export const url=new URL("../icons/thumbnail_bar.svg?v=63cf27a282672aecb6e663e55437d777774c79140baa487bc0f5f8a3c9d7c037",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
