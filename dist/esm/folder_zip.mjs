export const name="folder_zip";
export const id="dl_3152658e14814595af5f";
export const url=new URL("../icons/F/folder_zip.svg?v=5760b4e786e02aa32ff03a4316dda9ff6d602b7075a905cb932ef17385b82058",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
