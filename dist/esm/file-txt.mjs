export const name="file-txt";
export const id="dl_1a10b15c92714a3dbb55";
export const url=new URL("../icons/file-txt.svg?v=03798007ee92057c3c661e347711692483b6f6c0e92d6ffa52ecdc86d0c727d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
