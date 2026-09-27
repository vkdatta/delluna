export const name="file-magnifying-glass-thin";
export const id="dl_4e7e377086a7496fb9f1";
export const url=new URL("../icons/file-magnifying-glass-thin.svg?v=bbd0e8345140da59c65dc1897c5ead7a35c8318a0b8debe14327234562cbab9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
