export const name="file-txt";
export const id="dl_1a10b15c92714a3dbb55";
export const url=new URL("../icons/file-txt.svg?v=5adbf127dc7eef3daf16821250f6007c1a559bfeaee37aaeb95020718d7e8a0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
