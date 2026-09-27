export const name="file-ppt-fill";
export const id="dl_783cbcf32d5240bca415";
export const url=new URL("../icons/file-ppt-fill.svg?v=a5bd53cf78648492e70630f6acfd0e01840747fe996787b2848e6e797ee9e755",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
