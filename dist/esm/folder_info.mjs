export const name="folder_info";
export const id="dl_ee1b5d86410991539b2b";
export const url=new URL("../icons/folder_info.svg?v=b09f481ce0d5cdcb3d19ac4899efb3d871431b4fd3f21631208dcd6eb726a3aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
